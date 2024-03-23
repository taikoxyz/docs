---
title: Activer un proposant
description: Ce guide vous aidera à activer votre nœud Taiko en tant que proposant.
---

## Conditions préalables

- Vous [exécutez déjà un nœud Taiko ](/fr/guides/run-a-taiko-node).

## En utilisant `stn`

1. Installer [stn](https://github.com/d1onys1us/stn) si vous ne l'avez pas déjà fait.
2. Exécutez `stn config proposer` dans votre terminal et suivez les étapes.

## Utiliser un nœud simple-taiko

1. Tout d’abord, vous aurez besoin d’un prouveur du [marché](/fr/resources/prover-marketplace) (’est la seule option car l’exécution de votre propre prouveur n’est actuellement pas prise en charge).

2. Ensuite, vous pouvez définir `PROVER_ENDPOINTS` le fichier simple-taiko-node `.env` sur le point final du prouveur.

3. Ensuite, définissez le `L1_PROPOSER_PRIVATE_KEY` sur la clé privée d'un compte L1 qui enverra les transactions Propose Block.

4. Enfin défini `ENABLE_PROPOSER` sur `true` simple-taiko-node `.env`.
