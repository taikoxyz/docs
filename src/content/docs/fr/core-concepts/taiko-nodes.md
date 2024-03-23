---
title: Nœuds Taiko
description: Page conceptuelle de base pour les «  Nœuds Taiko ».
---

Taiko nodes are minimally modified Ethereum  that consist of two parts:
[Les nœuds Taiko sont des clients d’exécution](https://ethereum.org/en/glossary/#execution-client) Ethereum peu modifiés qui se composent de deux parties :

- [taiko-geth](https://github.com/taikoxyz/taiko-geth)
- [taiko-client](https://github.com/taikoxyz/taiko-client)

Vous pouvez le considérer comme un nœud du réseau principal Ethereum, sauf en remplaçant le client de consensus par `taiko-client`. `taiko-client` puis passe `taiko-geth` par [l'API du moteur](https://github.com/ethereum/execution-apis/tree/main/src/engine) . Il s'agit d'une conception modulaire qui permet de connecter facilement d'autres clients d'exécution.

![Taiko nodes diagram](~/assets/content/docs/core-concepts/taiko-nodes.png)

## taiko-geth

Le logiciel [taiko-geth](https://github.com/taikoxyz/taiko-geth) est un fork de [go-ethereum](https://github.com/ethereum/go-ethereum) avec quelques modifications apportées selon le protocole Taiko.

Comme les moteurs d'exécution du réseau principal Ethereum, `taiko-geth` écoute les nouvelles transactions L2 diffusées sur le réseau L2, les exécute dans l'EVM et conserve le dernier état et la base de données de toutes les données L2 actuelles.

Vous pouvez voir toutes les modifications apportées dans le `taiko-geth` fork sur [geth.taiko.xyz](https://geth.taiko.xyz) !

## Client taiko

Le logiciel [client taiko](https://github.com/taikoxyz/taiko-client) remplace l'élément client consensus d'un nœud du réseau principal Ethereum. Il se connecte à `taiko-geth`, et le binaire compilé comprend trois sous-commandes :

### `driver`

Le `driver` sert de client de consensus L2. Il écoute les nouveaux blocs L2 du `TaikoL1` contrat de protocole, puis ordonne au moteur d'exécution L2 connecté de les insérer ou de réorganiser sa chaîne locale via l'API du moteur.

### `proposer`

Il `proposer` récupère périodiquement les transactions en attente dans le pool de mémoire du moteur d'exécution L2, puis essaie de les proposer au `TaikoL1` contrat de protocole.

### `prover`

Il `prover` demande des preuves de validité au ZK-EVM et envoie des transactions pour prouver que les blocs proposés sont valides ou invalides.

## Processus de synchronisation de la chaîne

Le protocole Taiko permet à l'horodatage d'un bloc d'être égal à l'horodatage de son bloc parent, ce qui diffère du protocole Ethereum d'origine. C'est donc bien qu'il y ait deux `TaikoL1.proposeBlock` transactions incluses dans un bloc L1.

Le pilote du client Taiko informe le moteur d'exécution L2 de la dernière tête L2 vérifiée du contrat de protocole Taiko et essaie dans un premier temps de lui permettre de rattraper le dernier bloc L2 vérifié via P2P.

Le pilote surveille la progression de la synchronisation du moteur d'exécution : s'il ne parvient pas à effectuer une nouvelle progression de synchronisation pendant un certain temps, le pilote passe à l'insertion des blocs vérifiés dans sa chaîne locale via l'API du moteur, un par un.

Une fois que le moteur d'exécution L2 a rattrapé la dernière tête L2 vérifiée, le pilote s'abonne aux `TaikoL1.BlockProposed` événements. Lorsqu'un nouveau bloc en attente est proposé, le pilote :

1. Obtient la `TaikoL1.proposeBlock` transaction L1 correspondante.
2. Décode les `txList` métadonnées et bloque les données d'appel de la transaction.
3. Vérifie si le `txList` est valide en fonction des règles définies dans le protocole Taiko.

Si le `txList` est **valide** , le conducteur :  

1. Assemble une `TaikoL2.anchor` transaction déterministe basée sur les règles définies dans le protocole et la place comme première transaction dans le projet proposé `txList`.
2. Utilise ceci `txList` et les métadonnées du bloc décodées pour assembler un bloc L2 déterministe.
3. Ordonne au moteur d'exécution L2 d'insérer ce bloc assemblé et de le définir comme tête de chaîne canonique actuelle via l'API du moteur.

Si le `txList` n'est pas valide , le pilote :

1. Assemble un bloc L2 vide avec uniquement la transaction d'ancrage.

## Processus de proposition d'un bloc

Pour proposer un bloc, le `proposer`:

1. Récupère les transactions en attente du moteur d'exécution L2 via la `txpool_content` méthode RPC.
2. S'il y a trop de transactions en attente dans le moteur d'exécution L2, les divise en plusieurs transactions plus petites `txLists`. En effet, le protocole Taiko restreint la taille maximale de chaque fichier proposé `txList`.
3. Propose tout fractionné `txLists` en envoyant `TaikoL1.proposeBlock` des transactions.

## Processus de preuve d'un blocage

Lorsqu'un nouveau bloc est proposé, le `prover`:

1. Récupère les `TaikoL1.proposeBlock` données d'appel de la transaction L1, les décode et valide le `txList`, tout comme ce que `driver` fait le logiciel.
2. Attend que le bloc correspondant soit inséré par le `driver` logiciel du moteur d'exécution L2.
3. Génère une preuve de validité pour ce bloc de manière asynchrone.

Si le bloc proposé a un **valide** ou **invalide** `txList` , le `prover`:

1. Génère une preuve Merkle de la `TaikoL2.anchor` transaction du bloc pour prouver son existence dans le [MPT](https://ethereum.org/en/developers/docs/data-structures-and-encoding/patricia-merkle-trie/) `block.txRoot` de ' et [la preuve Merkle ](https://rollup-glossary.vercel.app/other-terms#merkle-proofs) de ce reçu de transaction dans le MPT de ' à partir du moteur d'exécution L2. `block.receiptRoot`
2. Soumet les `TaikoL2.anchor` octets codés RLP de la transaction, les octets codés RLP de sa réception, les preuves Merkle générées et une preuve de validité pour prouver la **validité** de ce bloc en envoyant une `TaikoL1.proveBlock` transaction (le bloc est valide même pour un invalide `txList` car nous prouvons les mappages invalides `txList` à un bloc vide avec seulement la transaction d'ancrage).
