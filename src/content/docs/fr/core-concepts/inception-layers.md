---
title: Couches de création
description: Page conceptuelle de base pour les « Couches de création ».
---

## Mise à l'échelle horizontale pour Ethereum

Pour faire évoluer Ethereum, vous avez besoin de plusieurs cumuls. La conception de Taiko est flexible afin qu'il puisse exécuter plusieurs instances de Taiko en tant que L2 parallèles, mais il a également la possibilité d'exécuter **Taiko sur Taiko** en tant que L3. C’était trivial à faire car Taiko est équivalent à Ethereum.

## Couches de création

Les couches de création font référence à l'utilisation de Taiko en tant que L2 et au déploiement de la base de code exacte en tant que L3 par-dessus. Compte tenu de l'équivalence Ethereum de Taiko, la relation L3 à L2 correspond étroitement à la relation L2 à L1, offrant une réutilisabilité et une simplicité maximales.

Cela est nécessaire car un seul cumul ne peut faire évoluer Ethereum que jusqu’à présent avant que la surcharge de l’État ne devienne un problème. Plusieurs cumuls (L2/L3/L-) sont requis pour Ethereum à grande échelle. Les couches de création (réutilisant la même base de code de type 1) débloquent une évolutivité extrêmement extensible pour Ethereum.

De plus, l’équivalence Ethereum entre les L2, L3 et au-delà signifie hériter de certaines propriétés puissantes, comme la transmission de messages arbitraires intégrées. Cela découle de la capacité d'un type 1 à lire les preuves Merkle d'un autre. Cela combat un inconvénient du fait d'avoir plusieurs chaînes : les craintes de fragmentation dégradant l'UX/DevX. Les différentes couches (adjacentes et supérieures) pouvant facilement communiquer entre elles à l'aide des preuves de Merkle, un résultat fragmenté peut être évité.

![Inception layers diagram](~/assets/content/docs/core-concepts/inception-layers-diagram.png)

Pour plus d'informations sur le fonctionnement de la transmission des messages de Taiko, consultez la page conceptuelle sur [Pontage](/fr/core-concepts/bridging).
