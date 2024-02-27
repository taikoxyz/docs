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

Coming soon!

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

### 1. Sign Up & Connect Wallet
- Go to Thirdweb Website on https://thirdweb.com/dashboard
- Click Sign In and Connect your Metamask Wallet
- After succesfully connect, input `email` and `name`
- Click `Get Started For Free`
- Check your Email to get verification code from thridweb email
- Back to thridweb and input the code
- Click Verify.

### 2. Deploy
- Go to deploy page on https://thirdweb.com/dashboard/contracts/deploy
- Click `Ready to Deploy`

![images](~/assets/content/docs/guides/Screenshot%202024-02-27%20131118.png)

- For example to deploy Account factory, click `Account Factory`

![images](~/assets/content/docs/guides/Screenshot%202024-02-27%20134247.png)

- Then click `Deploy now`
- Then show pop up, and click `Deploy Now`

![images](~/assets/content/docs/guides/Screenshot%202024-02-27%20132626.png)

- Confirm your transaction on Metamask
