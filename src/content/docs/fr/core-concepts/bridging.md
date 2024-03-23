---
title: Pontage
description: Page conceptuelle de base pour les « Pontage ».
---

Les ponts sont fondamentaux pour les utilisateurs et les applications inter-chaînes. Les utilisateurs peuvent se tourner vers une autre chaîne, telle que Taiko (un ZK-rollup). Pour ce faire, ils doivent réunir des fonds. Il est notoire que le rapprochement est une opération dangereuse. Comment vous assurez-vous que ce pont est sécurisé ?

Expliquons le pontage sur Taiko. Nous répondrons aux questions suivantes :

- [Comment le protocole Taiko permet-il une messagerie sécurisée entre chaînes ?](#messagerie-inter-chaînes)
- [Qu'est-ce que le service de signal Taiko ?](#le-service-de-signalisation)
- [Comment fonctionne la mise en œuvre du pont de Taiko ?](#comment-fonctionne-le-pont)

## Messagerie inter-chaînes

La conception du protocole Taiko, en particulier son équivalence Ethereum, permet une messagerie sécurisée entre chaînes. Voyons comment cela fonctionne en utilisant simplement des preuves Merkle.

### Taiko stocke les hachages de bloc de chaque chaîne

Taiko déploie deux contrats intelligents qui stockent les hachages de l'autre chaîne :

- TaikoL1 stocke un mappage blockNumber->blockHash `l2Hashes` (déployé sur Ethereum)
- TaikoL2 stocke un mappage blockNumber->blockHash `l1Hashes` (déployé sur Taiko)

Chaque fois qu'un bloc L2 est créé sur Taiko, le hachage du bloc englobant sur L1 est stocké dans le contrat TaikoL2. Et chaque fois qu'un bloc L1 est vérifié, le hachage L2 est stocké dans le contrat TaikoL1 (uniquement le dernier, si plusieurs sont vérifiés à la fois).

### Les arbres Merkle permettent de vérifier que les valeurs existent sur l'autre chaîne

Les arbres Merkle sont une structure de stockage de données qui permet de prendre des empreintes digitales de nombreuses données avec un seul hachage, appelé racine Merkle. La façon dont ils sont structurés permet de vérifier qu'une certaine valeur existe au sein de cette grande structure de données, sans avoir réellement besoin d'avoir accès à l'intégralité de l'arborescence Merkle. Pour ce faire, le vérificateur aurait besoin :

- La racine merkle, c'est le hachage unique « empreinte digitale » de l'arbre merkle
- La valeur, c'est la valeur que nous vérifions est à l'intérieur de la racine Merkle
- Une liste de hachages frères et sœurs intermédiaires, ce sont les hachages qui permettent au vérificateur de recalculer la racine merkle

Vous pouvez obtenir la dernière racine Merkle connue stockée sur la chaîne de destination en faisant appel `getCrossChainBlockHash(0)` au contrat TaikoL1/TaikoL2. Vous pouvez obtenir la valeur/le message à vérifier et les hachages frères et sœurs pour cette dernière racine Merkle connue en le demandant avec l'appel RPC standard `eth_getProof` sur la « chaîne source ». Ensuite, il vous suffit de les envoyer pour vérification par rapport au dernier hachage de bloc connu qui est stocké dans une liste sur la « chaîne de destination ».

Un vérificateur prendra la valeur (une feuille dans l'arbre merkle) et les hachages frères et sœurs pour recalculer la racine merkle. Si la racine Merkle calculée correspond à celle qui est stockée dans la liste des hachages de blocs de la chaîne de destination (les hachages de blocs de la chaîne source), alors nous avons prouvé que le message a été envoyé sur la chaîne source, en supposant que les hachages de blocs de la chaîne source sont stockés sur la chaîne de destination étaient corrects.

## Le service de signalisation

Le service de signal de Taiko est un contrat intelligent disponible sur L1 et L2, disponible pour tout développeur dapp. C'est ce qui utilise les preuves Merkle mentionnées précédemment pour fournir un service de messagerie inter-chaînes sécurisée.

Vous pouvez stocker des signaux et vérifier si un signal a été envoyé à partir d'une adresse. Il expose également une autre fonction importante : `isSignalReceived`.

A quoi sert cette fonction ? La première chose à comprendre est que le protocole Taiko maintient deux contrats importants :

- `TaikoL1`
- `TaikoL2`

Ces contrats gardent tous deux une trace des hachages de blocs sur l' autre chaîne . Ainsi, TaikoL1, qui est déployé sur Ethereum, a accès aux derniers hachages de blocs sur Taiko. Et TaikoL2, qui est déployé sur Taiko, a accès aux derniers hachages de blocs sur Ethereum.

Ainsi, `isSignalReceived` vous pouvez prouver sur l'une ou l'autre chaîne que vous avez envoyé un signal au service de transmission de l'autre chaîne. Un utilisateur ou un dapp peut appeler `eth_getProof`(https://eips.ethereum.org/EIPS/eip-1186) ce qui génère une preuve Merkle.

Vous devez fournir `eth_getProof` :

1. Le signal (les données que vous souhaitez prouver existent dans la racine de stockage d'un bloc de la chaîne)
2. L'adresse du service de signal (l'adresse du contrat qui stocke le signal fourni)
3. Le numéro de bloc sur lequel vous affirmez que le signal a été envoyé (facultatif : si vous ne le fournissez pas, il sera par défaut le dernier numéro de bloc)

Et `eth_getProof` générera une preuve Merkle (elle donnera les hachages frères et sœurs nécessaires et la hauteur du bloc, qui, avec le signal, pourra reconstruire la racine de stockage Merkle du bloc dans lequel vous affirmez que le signal existe).

Cela signifie que, en supposant que les hachages maintenus par TaikoL1 et TaikoL2 sont corrects, nous pouvons envoyer **des messages inter-chaînes** de manière fiable .

Passons en revue un exemple :

1. Premièrement, nous pouvons envoyer un message sur une chaîne source et le stocker sur le service de signal.
2. Ensuite, nous appelons `eth_getProof`, ce qui nous donnera une preuve que nous avons bien envoyé un message sur la chaîne source.
3. Enfin, nous faisons appel `isSignalReceived` au SignalService de la chaîne de destination qui vérifie essentiellement la preuve merkle. `isSignalReceived` recherchera le hachage de bloc que vous affirmez avoir stocké un message sur la chaîne source (où vous avez initialement envoyé le message), et avec les hachages frères et sœurs à l'intérieur de la preuve Merkle, il reconstruira la racine Merkle, qui vérifie que le signal a été inclus dans cette racine merkle, ce qui signifie qu'elle a été envoyée.

Et boum ! Nous avons envoyé un message inter-chaînes. Si cela vous prête à confusion, vous pouvez également trouver une simple dApp qui a été créée lors de l'un de nos ateliers pour démontrer les principes fondamentaux. Vous pouvez le trouver [ici](https://github.com/taikoxyz/MessageServiceShowCaseApp).

## Comment fonctionne le pont

Le pont est un ensemble de contrats intelligents et une application Web frontale qui vous permettent d'envoyer des jetons testnet ETH et ERC-20, ERC-1155 et ERC-721 entre Ethereum et Taiko. Ce pont n'est qu'une implémentation possible construite sur le protocole principal de Taiko, en particulier le service de signal que n'importe qui peut utiliser pour construire des ponts.

Tout d’abord, voici un organigramme du fonctionnement de notre implémentation de bridge dapp, qui utilise le service de signal :

![bridging send message flowchart](~/assets/content/docs/core-concepts/bridging-send-message.excalidraw.png) \
![bridging process message flowchart](~/assets/content/docs/core-concepts/bridging-process-message.excalidraw.png)

### Comment fonctionne le pontage Ether ?

Le pont de Taiko utilise le service de signal que nous avons décrit. Voici le flux général des utilisateurs pour le pont de Taiko :

1. L'utilisateur envoie ses fonds vers le contrat Bridge
2. Le Bridge verrouille l'Ether, et stocke un message en faisant appel `sendSignal(message)` au contrat SignalService
3. L'utilisateur reçoit Ether sur la chaîne de destination, s'il (ou un autre) fournit une preuve merkle valide que le message a été reçu sur la chaîne source

Avec la conception actuelle, il existe 2 façons de relier `Ether`:

1. `Ether` seul cas : L'utilisateur interagit directement avec le contrat Bridge en appelant `sendMessage`
2. `ERC-XXX` + `Ether` + cas : L'utilisateur interagit avec le `ERCXXXVault` (ERC20, ERC721, ERC1155) car il souhaite établir un pont entre certains jetons, mais s'il remplit le `message.value` champ, `Ether` il sera également ponté

### Comment fonctionne le pontage ERC-20 (ou ERC-721, ERC-1155) ?

Les jetons ERC-20 proviennent d'une chaîne canonique. Pour envoyer un jeton et le relier à l'autre chaîne, un nouveau contrat BridgedERC20 doit être déployé sur la chaîne de destination.

#### Pont de la chaîne canonique à la chaîne de destination

Voici les étapes générales du transfert canonique ERC-20 (le processus global est identique pour les types de jetons ERC-721 et ERC-1155 également !) d'une chaîne source vers la chaîne de destination :

1. Un contrat pour l'ERC-20 (ou ERC-721, ERC-1155) doit d'abord être déployé sur la chaîne de destination (sera effectué automatiquement par l'ERC20Vault s'il n'est pas déjà déployé)

2. Appelez `sendToken` la chaîne source ERC20Vault, cela transférera le montant en utilisant la `safeTransferFrom` fonction du contrat canonique ERC-20, sur la chaîne source, vers l'ERC20Vault.

3. Le contrat Vault (via le Bridge) envoie un message au Signal Service (sur la chaîne source), ce message contiendra certaines métadonnées liées à la demande de pont, mais surtout il inclut les données d'appel pour la `receiveToken` méthode.

4. Traitez le message sur la chaîne de destination en soumettant une preuve Merkle (générée à partir de la chaîne source), prouvant qu'un message est inclus dans l'état du service de signal de la chaîne source. Après avoir vérifié que cela s'est produit et effectué quelques vérifications, il tentera d'invoquer la `receiveToken` méthode codée dans le message. Cela créera ERC-20 (ou ERC-721, ERC-1155) sur le contrat BridgedERC20 à l'`to` adresse sur la chaîne de destination !

#### Pont de la chaîne de destination vers la chaîne canonique

Bon, faisons maintenant l'inverse, comment transférer un jeton ponté d'une chaîne source vers la chaîne de destination ? (La chaîne de destination dans ce cas est la chaîne canonique, où réside le jeton d'origine.)

1. Un contrat pour l'ERC-20 (ou ERC-721, ERC-1155) existe déjà sur la chaîne canonique, donc pas besoin d'en déployer un nouveau.
2. Faites appel `sendToken` au contrat de coffre-fort de jetons de chaîne source, cela brûlera l' ERC-20 sur le contrat BridgedERC20.
3. Le contrat Vault (via le Bridge) envoie un message au Signal Service (sur la chaîne source), ce message contiendra certaines métadonnées liées à la demande de pont, mais surtout il inclut les données d'appel pour la `receiveToken` méthode.
4. Traitez le message sur la chaîne de destination en soumettant une preuve Merkle (générée à partir de la chaîne source), prouvant qu'un message est inclus dans l'état du service de signal de la chaîne source. Après avoir vérifié que cela s'est produit et effectué quelques vérifications, il tentera d'invoquer la `receiveToken` méthode codée dans ce message. Cela transférera le montant de la chaîne de destination TokenVault vers l'`to` adresse de la chaîne de destination.
