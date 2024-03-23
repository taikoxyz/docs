---
title: FAQs
description: Page de ressources pour répertorier les FAQ.
---

## Qu’est-ce que le Taiko?

Taiko est un ZK-Rollup équivalent à Ethereum, entièrement sans autorisation et décentralisé. Cela signifie qu’utiliser Taiko est exactement la même chose qu’Ethereum. Non seulement Taiko prend en charge tous les opcodes EVM, mais il prend également en charge l'API client d'exécution JSON-RPC complète.

Taiko est un L2 qui tire sa sécurité d'Ethereum. Il n'y a pas de séquenceur ou de prouveurs centralisés, toutes les opérations sont sans autorisation et pilotées par la communauté. Apprenez-en davantage sur Taiko sous nos concepts de base dans la barre latérale.

## Qu'est-ce qu'un ZK-EVM de type 1?

Les différents types de ZK-EVM font des compromis entre compatibilité et coût de génération de preuves. Un ZK-EVM de type 1 donne la priorité à la compatibilité plutôt qu'au coût de génération d'épreuves.

Un autre terme pour un ZK-EVM de type 1 est « équivalent Ethereum ». Ce terme vient du fait que les ZK-EVM de type 1 n’apportent aucune modification à l’architecture Ethereum, qu’il s’agisse de la fonction de hachage, des arbres d’état ou des coûts de gaz. Cette équivalence nous permet de réutiliser les clients d'exécution avec un minimum de modifications.

## Taiko est-il open source?

Oui, Taiko est open source sous la licence permissive MIT (accès et modification gratuits). Le fork Geth ([taiko-geth](https://github.com/taikoxyz/taiko-geth)) conserve les licences Geth GPL d'origine.

## Puis-je ignorer ces journaux de mon nœud?

Rejoignez le Discord (`#errors-faq` canal) pour voir les journaux de nœuds qui peuvent être ignorés et qui sont des erreurs.

## Où puis-je trouver les adresses des contrats déployés?

Consultez [deployed contracts](/fr/network-reference/addresses) pour obtenir la liste des adresses de contrat déployées.

## J'ai exécuté un nœud lors d'un précédent testnet. Dois-je faire quelque chose de différent?

Oui, le dernier testnet (Katla) est déployé contre Holesky. Vous pouvez donc arrêter votre nœud d'archive Sepolia et démarrer un nœud d'archive Holesky. Vous pouvez également arrêter votre nœud Taiko (Jolnir) et exécuter un nœud Taiko (Katla). Consultez nos guides dans la barre latérale.

## Taiko a-t-il un séquenceur?

Taiko n'a pas de séquenceur L2, puisque tout le monde peut devenir proposant sans autorisation. En fin de compte, le validateur L1 Ethereum pour le bloc actuel est le séquenceur qui peut séquencer plusieurs blocs L2. C'est ce qu'on appelle également un cumul basé .

## Comment obtenir de l'ETH sur le réseau Taiko Katla?

Vous pouvez utiliser le [Taiko bridge](https://bridge.katla.taiko.xyz/) pour envoyer votre ETH du réseau Holesky vers le réseau Taiko Katla.
