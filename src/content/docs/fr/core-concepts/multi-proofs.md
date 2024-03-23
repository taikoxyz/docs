---
title: Multi-preuves
description: Page conceptuelle de base pour les « Multi-preuves ».
---

## Prouver les blocs Taiko

Le but de la preuve des blocs est de donner aux ponts une certitude quant à l'exécution qui a eu lieu lors du cumul. Pour s'appuyer sur un état survenu à l'intérieur du rollup, un pont voudra une preuve que tout a été fait correctement. Sur Taiko, vous pouvez exécuter un nœud en tant que prouveur et prouver des blocs, sans autorisation. Cela signifie que vous pouvez examiner les blocs proposés sur le contrat TaikoL1 et générer des preuves pour eux. Actuellement, n’importe quel prouveur peut créer des preuves pour les blocs proposés. Cela signifie que le nombre de « transitions d'état » n'a pas de limite supérieure, car nous ne savons pas encore quelle est la transition d'état correcte. Seul le premier prouveur avec une preuve valide de la transition d'état correcte recevra la récompense de `ETH` (et éventuellement n'importe quel `ERC20` ou même NFT si l'implémentation du pool de prouveurs le favorise).

## Blocs vérifiés et preuves parallèles

Il existe trois états dans lesquels un blocage peut se trouver sur Taiko :

- Proposé
- Prouvé
- Vérifié

Nous savons déjà ce qu'est un bloc proposé (il doit réussir au moins les tests de validité intrinsèque au niveau du bloc pour être accepté par le contrat TaikoL1). Ensuite, un bloc proposé peut être valide ou invalide, selon qu'il réussit ou non le test de validité intrinsèque de la liste de transactions. Un bloc n'est pas valide s'il échoue au test de validité intrinsèque de la liste de transactions et ce bloc n'est pas créé sur Taiko.

Désormais, un blocage peut être prouvé, mais aussi « vérifié » davantage. Quelle est la différence? Un bloc est prouvé s'il possède une preuve valide qui prouve une transition d'état d'un état (bloc parent) à un autre (bloc actuel). Cependant, les blocs sont prouvés en parallèle par les prouveurs décentralisés. Ainsi, même si un bloc peut prouver qu'un bloc parent passe au bloc actuel, nous ne savons pas si le bloc parent lui-même a été prouvé. Comme vous pouvez le voir, pour qu'un bloc soit « vérifié », il doit prouver la transition d'état valide vers le bloc actuel, mais le parent doit également être vérifié. Nous supposons que le bloc de genèse (qui n'a pas de parent) est vérifié. Ainsi, tous les blocs enfants de la genèse au bloc actuel doivent avoir des preuves de leur transition d'état pour que le bloc actuel soit « vérifié ».

Pour les apprenants visuels voici une visualisation des trois étapes (proposé -> prouvé -> vérifié)

**Proposé :**

![proposed](~/assets/content/docs/core-concepts/proposed.png)

**Prouvé :**

![proved](~/assets/content/docs/core-concepts/proved.png)

**Vérifié :**

![verified](~/assets/content/docs/core-concepts/verified.png)

## Marché des preuves hors chaîne (style PBS)

La preuve des blocs nécessite une puissance de calcul importante pour calculer la preuve à soumettre et vérifier la preuve sur Ethereum. Les prouveurs doivent être rémunérés pour ce travail, car le réseau doit attirer des prouveurs disposés à effectuer ce travail. Cependant, le prix à payer pour un justificatif n’est pas évident :

1. Le coût du gaz Ethereum pour publier/vérifier une preuve sur Ethereum est imprévisible.
2. Le coût de génération des preuves ne correspond pas nécessairement parfaitement au coût du gaz.
3. Le coût de génération de preuves ne cesse de changer à mesure que le logiciel de preuve est optimisé et que le matériel utilisé devient plus rapide et moins cher.
4. Le coût de génération d’une preuve dépend de la rapidité avec laquelle une preuve doit être générée. 

Dans le but d’optimiser l’efficacité du réseau et d’équilibrer les coûts, l’écosystème introduit un solide marché à l’épreuve des chaînes. Les proposants, bloc par bloc, recherchent activement des fournisseurs de services de preuve potentiels via ce marché dynamique. Un élément essentiel de cette configuration est l'API exposée publiquement, offrant aux proposants les moyens d'interroger et d'interagir avec les fournisseurs de preuves disponibles hors chaîne.

Lorsqu'un accord est trouvé concernant les frais de preuve pour un bloc spécifique, le prestataire de services de preuve choisi est alors chargé d'accorder une signature cryptographique au proposant. Cette signature constitue un engagement contraignant, signifiant l'engagement du prouveur à fournir la preuve dans les délais convenus.

Les prouveurs au sein de ce marché de preuve hors chaîne se présentent sous deux formes principales : les comptes externes (EOA) et les contrats, souvent appelés pools de prouveurs. Pour être considéré comme un pool de Prover, un contrat doit respecter des critères spécifiques, implémentant soit l'interface IProver, telle que définie précédemment par Taiko, soit l'interface IERC1271 (isValidSignature).

Lors de la soumission d'un bloc par un proposant, la signature accordée par le prestataire choisi est soumise à vérification. Tout écart entraîne une transaction annulée.

Comme incitation supplémentaire pour les proposants, le système intègre l'émission de jetons TKO. Cela constitue une motivation supplémentaire, car proposer des blocs à lui seul peut ne pas toujours s'avérer rentable, en particulier si l'on considère les frais de chaîne d'Ethereum plus les frais de preuve. L'émission de jetons TKO fonctionne sur un « taux d'émission par seconde » dynamique, comparant chaque proposition de bloc à la précédente.

La récompense dépend du prestataire de services de preuve et de l'accord. Pour les pools EOA et Prover qui implémentent l’interface IERC1271, la récompense est versée en ETH. Cependant, dans les cas où les fournisseurs implémentent l'interface IProver, les frais du prouveur peuvent être de l'ETH, de tout autre jeton ERC20, ou même des NFT, en fonction des conditions négociées.

Pour ajouter une couche de sécurité et d'engagement au processus, les prouveurs doivent fournir une quantité substantielle de jetons TKO par bloc, servant efficacement d'assurance. En cas de non-livraison malheureuse de l'épreuve dans le délai imparti, une partie, soit 1/4, est dirigée vers le prouveur lui-même, tandis que les 3/4 restants sont définitivement brûlés. À l’inverse, une livraison réussie et en temps opportun des épreuves garantit le retour de ces jetons au Prover.

## Multi-preuves

Une excellente ressource pour en savoir plus sur l'approche de Taiko en matière de sécurité avec des preuves multiples est le fil Twitter [ici](https://x.com/taikoxyz/status/1745546868028068273).

Les implémentations cryptographiques sont complexes et pas encore matures. Pour minimiser les bugs et vulnérabilités potentiels, la diversité des systèmes de preuve est nécessaire. Taiko est l'un des défenseurs qui défendent fermement l'approche multi-preuves dans les rollups. L'approche de Taiko vise à accroître la sécurité et la diversité en utilisant plusieurs systèmes de preuve et clients, réduisant ainsi le risque associé aux bogues ou aux vulnérabilités d'un système unique. L'approche comprend également l'intégration de différents types de preuves.

Taiko propose un pipeline multi-preuve robuste qui traduit les instructions au niveau de l'assemblage provenant de différents clients d'exécution en arithmétiques pour les systèmes de preuve algébrique ou polynomiale. Différents backends pour coder ces arithmétiques, tels que SuperNova, Halo2 et eSTARK, peuvent également être utilisés, sans être limités par l'utilisation d'un seul protocole.

En plus des preuves ZK, Taiko utilise SGX (un Trusted Execution Environment développé par Intel) pour générer un autre type de preuve. SGX exécute le même code qui serait exécuté sur un zkVM, qui fonctionne un peu comme un client d'exécution léger. Par conséquent, tous les systèmes de preuve vérifient l'exécution du même client léger sous-jacent, permettant potentiellement la réutilisation des données nécessaires. Les données nécessaires sont signées dans SGX à l'aide d'une signature ECDSA standard, utilisant une clé privée exclusive à SGX. La signature est ensuite vérifiée au sein du contrat intelligent.

## Vidéo

<iframe
  src="https://www.youtube.com/embed/9LT6B1pgkI8?si=KFQxakvFTNdXwwvJ"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowFullScreen
></iframe>
