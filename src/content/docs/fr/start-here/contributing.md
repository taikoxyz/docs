---
title: Contribuant
description: Découvrez comment contribuer à Taiko.
---

Nous serions ravis de toute contribution que vous pouvez apporter à Taiko. Bienvenue dans le manuel de contribution !

**Table des matières:**

- [Faire une contribution](#make-a-contribution)
- [Normes de codage](#coding-standards)
- [Normes documentaires](#documentation-standards)

## Faire une contribution

Merci d'avoir exploré l'opportunité de contribuer à Taiko.xyz. Que vous soyez un développeur expérimenté ou tout juste débutant, nous apprécions et apprécions vos contributions uniques.

**Voici quelques façons dont vous pouvez contribuer :**

- Ouvrez un nouveau problème [ici](https://github.com/taikoxyz/taiko-mono/issues) (veuillez vérifier que le problème n'existe pas déjà).
- Travaillez sur un problème existant (consultez la [liste des bons premiers problèmes ](https://github.com/orgs/taikoxyz/projects/9/views/31) sur notre tableau de projet public).

Veuillez commenter le problème sur lequel vous souhaitez travailler. Consultez également les [ormes de codage](#coding-standards) et [les normes de documentation](#documentation-standards) vant de commencer à travailler sur la pull request.

Une fois la demande d'extraction fusionnée avec l'un des référentiels GitHub de Taiko (vous pouvez voir quels référentiels ici : [2023 Taiko Contributor GitPOAP](https://www.gitpoap.io/gp/893)), vous recevrez automatiquement un Taiko Contributor GitPOAP. L'ouverture d'un bon nouveau numéro (pas un problème de spam) est également éligible pour un GitPOAP, laissez simplement un commentaire et nous invoquerons manuellement un robot GitHub qui enverra le GitPOAP.

Vous pouvez apprendre comment contribuer au mieux à Taiko en regardant la vidéo [« Taiko Contributing Guide - Community Workshop »](https://www.youtube.com/watch?v=xMDSHT5C29c) sur notre chaîne YouTube.

## Normes de codage

Cette section décrit nos normes de codage chez Taiko.

### Demandes de tirage

**Exigences de base pour les PR**

Avant de pouvoir considérer vos contributions, veuillez consulter les exigences suivantes :

- Toute contribution doit suivre les normes documentées dans ce dossier.
- La portée doit être plus grande qu'un simple changement de nom ou une correction de faute de frappe. Nous demandons de bien vouloir que les petites mises à jour incrémentielles soient combinées en demandes d'extraction plus substantielles. Cette approche rationalisera notre développement et garantira la concentration sur les améliorations fondamentales.

Spécifiez la portée de votre modification avec un [commit conventionnel](https://www.conventionalcommits.org/en/v1.0.0/) dans le titre du PR (par exemple, `feat(scope): description of feature`). Celui-ci sera écrasé et fusionné dans la `main` branche. Vous pouvez trouver la liste complète des étendues autorisées [ici](https://github.com/taikoxyz/taiko-mono/blob/main/.github/workflows/lint-pr.yml#L19).

Étant donné que nous réduisons toutes les modifications en un seul commit, essayez de limiter le PR à la portée spécifiée dans le message de validation. Ce message de validation se retrouvera dans le journal des modifications automatisé en vérifiant quels packages sont affectés par la validation.

Par exemple, `feat(scope): description of feature` cela ne devrait avoir un impact que sur le `scope` package. Si votre modification est globale, vous pouvez utiliser `feat: description de la feature`, par exemple.

**Remarque :
L'équipe taiko évaluera tous les PR et pourra clôturer toute demande d'extraction qui ne respecte pas les normes décrites dans ce document. Veuillez noter que les petites demandes de tirage ne seront pas prises en compte pour les futurs parachutages. Nous encourageons les contributions qui apportent des améliorations significatives au projet.

### Commentaires sur le code source

Suivez le [format NatSpec](https://docs.soliditylang.org/en/latest/natspec-format.html) pour documenter le code source du contrat intelligent. Veuillez respecter quelques normes supplémentaires :

#### Style de commentaire

Choisissez `///` plutôt ``/** */` les commentaires NatSpec multilignes pour plus de cohérence. Tous les commentaires NatSpec doivent utiliser `///` à la place de `/** */`. Des commentaires explicatifs supplémentaires doivent être utilisés `//`, même pour les commentaires sur plusieurs lignes.

#### Étiquette de notification

Omettez l'utilisation de `@notice` et laissez le compilateur le récupérer automatiquement pour économiser de l'espace dans les colonnes. Par exemple, ceci :

```
/// @notice Ceci est un avis.
```

devient ceci :

```
/// Ceci est un avis.
```

#### Retrait des annotations

Pour les annotations multilignes, ne « alignez » pas. Par exemple, ceci est faux :

```
/**
 * Voici un commentaire.
 * @param someParam Voici un long paramètre bla bla bla
 *              et je l'enveloppe ici.
 * @return someThing Voici un long paramètre de retour blabla
 *              et je l'enveloppe ici.
 */
```

C'est **correct** :

```
/**
 * Voici un commentaire.
 * @param someParam Voici un long paramètre bla bla bla
 * et je l'enveloppe ici.
 * @return someThing Voici un long paramètre de retour blabla
 * et je l'enveloppe ici.
 */
```

#### Sauts de ligne supplémentaires

Utilisez des sauts de ligne supplémentaires comme bon vous semble. Par défaut, ne les utilisez pas sauf si cela améliore la lisibilité.

C'est **préféré** :

```
/**
 * Voici un commentaire.
 * @param someParam Voici un long paramètre bla bla bla
 * et je l'enveloppe ici.
 * @return someThing Voici un long paramètre de retour blabla
 * et je l'enveloppe ici.
 */
```

C'est **bien** aussi :

```
/**
 * Voici un commentaire.
 *
 * @param someParam Voici un long paramètre bla bla bla
 * et je l'enveloppe ici.
 * @return someThing Voici un long paramètre de retour blabla
 * et je l'enveloppe ici.
 */
```

#### Commentaires supplémentaires

Vous pouvez utiliser des commentaires supplémentaires avec `//`. Ceux-ci peuvent être au-dessus de ce qu’il décrit ou sur le côté. Essayez de rester cohérent dans ce que vous commentez. Ne pas utiliser `/* */`.. Vous pouvez aligner ou non les commentaires sur le côté, selon ce qui améliore la lisibilité.

C'est **correct** :

```
struct Some {
  // C'est foo
  uint256 foo;
  uint256 bar; // C'est bar
}
```

C'est **faux** :

```
struct Some {
  uint256 foo; /* C'est foo */
}
```

#### Les points

Les points sont facultatifs pour les commentaires, mais recommandés s'il s'agit d'une phrase appropriée. Cependant, restez cohérent dans le fichier ou la section que vous commentez.

C'est **correct** :

```
struct Some {
  // C'est foo
  uint256 foo;
}
```

C'est **faux**:

```
struct Some {
  // C'est foo.
  uint256 foo;
  // C'est bar
  uint256 bar;
}
```

#### Mentionner d'autres fichiers dans le dépôt

Pour mentionner un autre fichier de contrat dans le dépôt, utilisez le standard comme ceci :

```solidity
/// @notice Voir la documentation dans {IProverPool}
```

Si vous faites référence à une structure ou une fonction dans le fichier, vous pouvez utiliser la norme comme ceci :

```solidity
/// @notice Voir la documentation dans {TaikoData.Config}
```

#### Documenter les interfaces

Pour documenter le contrat d'implémentation d'une interface, vous ne pouvez pas utiliser  `@inheritdoc`, il n'est pas pris en charge pour les contrats. Ainsi, vous devriez mentionner une déclaration comme celle-ci :

```solidity
/// @notice Voir la documentation dans {IProverPool}
```

Vous pouvez ensuite mentionner des détails spécifiques à l'implémentation en ajoutant une `@dev` balise :

```solidity
/// @notice Voir la documentation dans {IProverPool}
/// @dev Cette implémentation utilise un ProverPool de taille 32.
```

#### Documenter les fonctions et structures internes

Les fonctions et structures internes doivent être commentées avec une `@dev` balise, et vous pouvez également commenter le contenu de la structure avec des commentaires explicatifs.

#### Documenter les fonctions orientées utilisateur par rapport aux fonctions internes

Toutes les fonctions destinées aux utilisateurs doivent être entièrement documentées avec NatSpec. Les fonctions internes doivent toujours être commentées avec une `@dev` balise, pas une `@notice` balise.

#### Commentaires explicatifs

Utilisation des commentaires explicatifs `//`. Il existe une idée commune selon laquelle le code décrit la documentation. Il y a des avantages à cette approche. L'un des avantages est que vous supprimez le couplage entre la documentation et le code qu'elle décrit, c'est pourquoi nous devons toujours nous efforcer d'obtenir une [documentation minimale viable](https://google.github.io/styleguide/docguide/best_practices.html#minimum-viable-documentation) (l'une de nos [philosophies](#philosophies) de base en matière de documentation ). Il peut également paraître plus propre.

Il est important que notre base de code soit bien documentée avec des **commentaires explicatifs** . Ainsi, en plus de la documentation NatSpec standard que nous devrions appliquer, nous devrions commenter les éléments les plus complexes de notre base de code pour une meilleure lisibilité. Plus important que de commenter ce que nous devrions nous préoccuper de commenter pourquoi . Le quoi n'a pas besoin d'être commenté pour des choses évidentes, bien sûr le code est capable d'y parvenir. Nous devrions commenter le quoi pour des choses plus complexes pour aider le lecteur à comprendre plus rapidement le code. En plus de cela, nous devrions nous efforcer de répondre au pourquoi avec des commentaires dans notre code.

Gardez à l’esprit l’avantage d’avoir une documentation minimale viable. Gardez les commentaires proches du code qu'il décrit, afin qu'il ne devienne pas facilement obsolète ou obsolète.

#### Ordre des annotations

Il y a plusieurs annotations utilisées dans NatSpec, voici l'ordre de priorité que nous utilisons de haut en bas :

- @title
- @author [nous n'utilisons pas cette balise]
- @notice
- @dev
- @param
- @return
- @inheritdoc
- @custom [nous n'utilisons pas cette balise sauf si nous en définissons la convention ici]

## Normes documentaires

Cette section décrit nos normes de documentation chez Taiko.


### Philosophies
- Créez la documentation minimale viable.
- Ne vous répétez pas, utilisez des liens vers la documentation existante ou héritez-en.
- Gardez la documentation proche de ce qu'elle décrit (par exemple, dans le code source).

### Style d'écriture

Utilisez le [Microsoft Writing Style Guide](https://learn.microsoft.com/en-us/style-guide/welcome/) comme point de référence de base pour le style d’écriture. En général, ne vous inquiétez pas trop des fautes de frappe. Ce qui est plus important, c'est de suivre les [philosophies](#philosophies) de base décrites ci-dessus et de suivre les normes structurelles pour une documentation très lisible et minimale.

### Créer du contenu

Si vous souhaitez créer du contenu (vidéo, article de blog, fil de tweet, visuels, etc.), vous êtes absolument libre de le faire. Il est utile d'obtenir un examen par les pairs à ce sujet. Si vous avez besoin d'un examen par les pairs, veuillez contacter la communauté/l'équipe sur le [Taiko Discord](https://discord.gg/taikoxyz) .

Si vous recherchez des conseils supplémentaires sur la création de contenu, vous pouvez consulter le [guide de contenu Taiko](https://hackmd.io/@taikolabs/BJurgF1bn) .
