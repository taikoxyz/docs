---
title: Deploy a contract
description: This guide will help you deploy a smart contract on Taiko.
---

This guide will help you deploy a smart contract on Taiko.

## Prerequisites

- A wallet with some testnet ETH on Taiko (can receive this from [the bridge](/guides/bridge-tokens)).
- The private key to the account with testnet ETH on Taiko.

## Deploy a contract using Foundry

### 1. Install Foundry

Open a terminal and run the following commands to install Foundry:

```bash
curl -L https://foundry.paradigm.xyz | bash
foundryup
```

### 2. Create a project with Foundry

```bash
forge init hello_foundry && cd hello_foundry
```

### 3. Deploy your contract

Deploy the contract located at `src/Counter.sol`. Replace `YOUR_PRIVATE_KEY` below with your private key which has some testnet ETH on Taiko.

```bash
forge create src/Counter.sol:Counter \
  --rpc-url https://rpc.katla.taiko.xyz \
  --private-key YOUR_PRIVATE_KEY
```

## Deploy a contract using Hardhat

### 1. Installation NPM, Hardhat and dotenv
To install it, you need to create an npm project by going to an empty folder, running ``npm init``, and following its instructions. You can use another package manager, like yarn, but we recommend you use npm 7 or later, as it makes installing Hardhat plugins simpler.

Once your project is ready, you should run
```bash
npm install --save-dev hardhat
```

Also you should install dotenv to manage private key for deployment
```bash
npm install dotenv
```

### 2. Hardhat project setup
We will explore the basics of creating a Hardhat project with a sample contract, tests of that contract, and a script to deploy it.
To create the sample project, run 
```bash
npx hardhat init
```
in your project folder:
````
$ npx hardhat init
888    888                      888 888               888
888    888                      888 888               888
888    888                      888 888               888
8888888888  8888b.  888d888 .d88888 88888b.   8888b.  888888
888    888     "88b 888P"  d88" 888 888 "88b     "88b 888
888    888 .d888888 888    888  888 888  888 .d888888 888
888    888 888  888 888    Y88b 888 888  888 888  888 Y88b.
888    888 "Y888888 888     "Y88888 888  888 "Y888888  "Y888

👷 Welcome to Hardhat v2.20.1 👷‍

? What do you want to do? …
❯ Create a JavaScript project
  Create a TypeScript project
  Create a TypeScript project (with Viem)
  Create an empty hardhat.config.js
  Quit
````

After that:
````
888    888                      888 888               888
888    888                      888 888               888
888    888                      888 888               888
8888888888  8888b.  888d888 .d88888 88888b.   8888b.  888888
888    888     "88b 888P"  d88" 888 888 "88b     "88b 888
888    888 .d888888 888    888  888 888  888 .d888888 888
888    888 888  888 888    Y88b 888 888  888 888  888 Y88b.
888    888 "Y888888 888     "Y88888 888  888 "Y888888  "Y888

Welcome to Hardhat v2.20.1

√ What do you want to do? · Create a JavaScript project
√ Hardhat project root: · C:\user\filename
√ Do you want to add a .gitignore? (Y/n) · y
√ Do you want to install this sample project's dependencies with npm (@nomicfoundation/hardhat-toolbox)? (Y/n) · y
````
### 2. Katla network configuration
To set up your config, you have to export an object from ``hardhat.config.js``.
For Taiko Katla network configuration:
```javascript
require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.20",
  defaultNetwork: "Katla",
  networks: {
    hardhat: {
    },
    Katla: {
      url: "https://rpc.katla.taiko.xyz",
      accounts: [process.env.PRIVATE_KEY],
    }
  },
};

```
❗️❗️❗️ Do not forget create a ``.env`` file and add the your private key in it. ``PRIVATE_KEY=abc..123``

### 3. Compile
To compile your contract, simply run:
```bash
npx hardhat compile
```

### 4. Deploy
To deploy your contract, run this:
```bash
npx hardhat run --network Katla scripts/deploy.js
```

## Deploy a contract using Remix

### 1. Open Remix IDE

https://remix.ethereum.org

### 2. Create a new `.sol` file

![new file](~/assets/content/docs/guides/newfile.png)

- Give it any name, for example `Counter.sol`.
- Fill with this example code:

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

### 3. Compile

- Change the Compiler version to `0.7.0+commit.9e61f92b`

![new file](~/assets/content/docs/guides/compiler.png)

- Then compile it.

### 4. Deploy

- Change the Environment to `Injected Provider`

![new file](~/assets/content/docs/guides/provider.png)

![new file](~/assets/content/docs/guides/transact.png)

- Then click `transact`

- Finally, verify the smart contract using [Blockscout](/guides/verify-a-contract/#verify-a-contract-with-hardhat-or-other-alternatives)

## Deploy a contract using thirdweb

Coming soon!
