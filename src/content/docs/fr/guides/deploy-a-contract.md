---
title: Déployer un contrat
description: Ce guide vous aidera à déployer un contrat intelligent sur Taiko.
---
Ce guide vous aidera à déployer un contrat intelligent sur Taiko.

## Conditions préalables

- Un portefeuille avec du testnet ETH sur Taiko (peut le recevoir depuis [le pont ](/guides/bridge-tokens)).
- La clé privée du compte avec testnet ETH sur Taiko.

## Déployer un contrat à l'aide de Foundry

### 1. Installer la foundry

Ouvrez un terminal et exécutez les commandes suivantes pour installer Foundry :

```bash
curl -L https://foundry.paradigm.xyz | bash
foundryup
```

### 2. Créez un projet avec Foundry

```bash
forge init hello_foundry && cd hello_foundry
```

### 3. Déployez votre contrat

Déployez le contrat situé à l'adresse `src/Counter.sol`. Remplacez `YOUR_PRIVATE_KEY` ci-dessous par votre clé privée qui contient du testnet ETH sur Taiko.

```bash
forge create src/Counter.sol:Counter \
  --rpc-url https://rpc.katla.taiko.xyz \
  --private-key YOUR_PRIVATE_KEY
```

## Déployer un contrat à l'aide de Hardhat

À venir!

## Déployer un contrat à l'aide de Remix

### 1. Ouvrez l'IDE Remix

https://remix.ethereum.org

### 2. Créez un nouveau `.sol` fichier

![new file](~/assets/content/docs/guides/newfile.png)

- Donnez-lui n'importe quel nom, par exemple `Counter.sol`.
- Remplissez avec cet exemple de code :

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.7.0;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v3.4.0-solc-0.7/contracts/token/ERC20/ERC20.sol";

contract Token is ERC20 {

    constructor () ERC20("Example Token Katla", "ETK") {
        _mint(msg.sender, 1000000 * (10 ** uint256(decimals())));
    }
}
```

### 3. Compiler

- Changez la version du compilateur en `0.7.0+commit.9e61f92b`

![new file](~/assets/content/docs/guides/compiler.png)

- Puis compilez-le.

### 4. Déployer

- Changer l'environnement en `Injected Provider`

![new file](~/assets/content/docs/guides/provider.png)

![new file](~/assets/content/docs/guides/transact.png)

- Puis clique `transact`

- Enfin, vérifiez le contrat intelligent à l'aide de [Blockscout](/guides/verify-a-contract/#verify-a-contract-with-hardhat-or-other-alternatives)

## Déployer un contrat en utilisant ThirdWeb

À venir!

