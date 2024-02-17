---
title: Deploy a contract using Hardhat
description: This guide will help you deploy a smart contract on Taiko using Hardhat.
---

Hardhat is an Ethereum development environment for deploying smart contracts, running tests, and debugging Solidity code locally. It is one of the popular smart contract development frameworks. This guide demonstrates deploying a Lock smart contract on Taiko using Hardhat, highlighting the compatibility of Ethereum contracts with Taiko. 

For a visual walkthrough, refer to our [video tutorial](https://www.loom.com/share/41dcd20628774d3bbcce5edf2647312f).

## Set up the environment
Hardhat is a flexible Ethereum development environment designed for testing, compiling, and deploying smart contracts. It requires Node.js, npm, and Git to get started.

To effectively use Hardhat, your system must have [Node.js](https://nodejs.org/en/) (v10+ LTS) and npm installed. 

:::tip
If you are using Windows, we strongly recommend using [WSL 2](https://learn.microsoft.com/en-us/assessments/) to follow this guide.
:::

## Create a Hardhat project
- In your desired directory, run
```bash
mkdir hello-hardhat && cd hello-hardhat
```
- Initialize an npm project
```bash
npm init -y
```
- Install dotenv for environment variable management
```bash
npm install dotenv
```
- Add Hardhat to your project
```bash
npm install --save-dev hardhat
```
- Initialize Hardhat
```bash
npx hardhat init
```
Choose `Create a JavaScript project` and follow the prompts, agreeing to create a `.gitignore` and install suggested dependencies.

## Configure Your Project

- Delete `deploy.js` in the `/scripts` directory and `Lock.sol` in the `/contracts` directory.
- In your project's `/contracts` directory, create a new file named `Storage.sol` and paste the provided Solidity code into it using your text editor.
```solidity
// /contracts/Storage.sol

// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.8.2 <0.9.0;

contract Storage {

    uint256 number;
    function store(uint256 num) public {
        number = num;
    }

    function retrieve() public view returns (uint256){
        return number;
    }
}
```
This contract, named `Storage`, includes functions to store and retrieve a `uint256` number.
- Proceed to the `/scripts` directory of your Hardhat project to write a deployment script. Then create and open a new `deploy.js` file to insert the provided JavaScript code.

```javascript
// /scripts/deploy.js
const { ethers } = require("hardhat");

async function main() {
  const StorageContract = await ethers.getContractFactory("Storage");
  const storageContract = await StorageContract.deploy();

  await storageContract.waitForDeployment();
  const tx = await storageContract.deploymentTransaction();

  console.log("Contract deployed successfully.");
  console.log(`Deployer: ${storageContract.runner.address}`);
  console.log(`Deployed to: ${storageContract.target}`);
  console.log(`Transaction hash: ${tx.hash}`);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  }); 
```
- Populate the `.env` file. That is,

    - Create a `.env` file within the `root` folder.
    - Populate `.env` with your `YOUR_PRIVATE_KEY` and the Taiko's `RPC_URL` as follows:

```plaintext
RPC_URL="https://rpc.katla.taiko.xyz"
YOUR_PRIVATE_KEY="<insert private key here>"
```

:::note
Make sure `.env` is in the `.gitignore` file to avoid uploading your `ACCOUNT_PRIVATE_KEY`.
:::
- Update `hardhat.config.js` with the following configuration to include Taiko network settings and Solidity version.
```javascript
// hardhat.config.js
require('dotenv').config();
require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.20",
  networks: {
    taiko: {
      url: process.env.RPC_URL,
      accounts: [process.env.YOUR_PRIVATE_KEY],
    }
  }
};
```

## Compile your contracts
To compile your smart contracts, run
```bash
npx hardhat compile
```
Your compiled contracts will be located in the `artifacts/` directory.

## Test your contract
Execute your contract tests with
```bash
npx hardhat test
```
For more detailed information on testing, visit [Testing Contracts with Hardhat](https://hardhat.org/hardhat-runner/docs/guides/test-contracts).
## Deploy your contracts
To deploy your contracts to Taiko network, use
```bash
npx hardhat run --network taiko scripts/deploy.js
```
:::note
Ensure you replace `YOUR_PRIVATE_KEY` with your actual private key that holds some testnet ETH on Taiko.
:::

This command deploys your `Storage` contract to the Taiko. For additional details on deploying contracts with Hardhat, refer to the [Deploying Contracts with Hardhat](https://hardhat.org/hardhat-runner/docs/guides/deploying). The output on the terminal looks like as below.

```bash
Contract deployed successfully.
Deployer: 0xFdBA275E47....
Deployed to: 0x77De5f1e40....
Transaction hash: 0x75f219defa....
```

You can now check your deployed contract on [blockscout explorer](https://explorer.katla.taiko.xyz/) using the `deployed contract address`.