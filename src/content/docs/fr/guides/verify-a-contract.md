---
title: Vérifier un contrat
description: Ce guide vous aidera à vérifier un contrat intelligent sur Taiko.
---
Ce guide vous aidera à vérifier un contrat intelligent sur Taiko.

## Conditions préalables

Vous disposez d'un contrat déployé sur Taiko et du code source disponible.

## Vérifier un contrat avec Foundry

Remplacez l'adresse du contrat et le chemin du fichier vers le contrat ci-dessous, puis exécutez-le dans le terminal pour vérifier votre contrat.

```bash
forge verify-contract 0x526317252e346978869d178081dA2cd10ac8b56D src/Counter.sol:Counter \
  --verifier-url https://blockscoutapi.katla.taiko.xyz/api\? \
  --verifier blockscout
```

:::Remarque
Pour certains utilisateurs, la commande ci-dessus ne fonctionne pas sur Blockscout (en cours d'investigation). Vous pouvez également essayer de passer un autre `--verifier-url` :

```bash "https://blockscoutapi.katla.taiko.xyz/api?module=contract&action=verify"
--verifier-url https://blockscoutapi.katla.taiko.xyz/api?module=contract&action=verify
```

:::

## Vérifier un contrat avec Hardhat ou d'autres alternatives

Consultez la documentation Blockscout [ici](https://docs.blockscout.com/for-users/verifying-a-smart-contract)!
