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

TODO.

## Deploy a contract using Remix

TODO.

## Deploy a contract using thirdweb

TODO.
