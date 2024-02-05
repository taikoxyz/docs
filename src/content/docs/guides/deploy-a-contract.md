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

#### 1. Installation and project setup

Follow the Installation and setup guide at [hardhat](https://hardhat.org/tutorial/creating-a-new-hardhat-project
)

Also install [dotenv](https://www.npmjs.com/package/dotenv) to manage private key for deployment

#### 2. Network Configuration
Once the project is created, The network to which contracts have to be deployed can be configured in `hardhat.config.js` which will be available in the root of your project folder.

Add the following configuration code
```javascript
module.exports = {
  defaultNetwork: "katla",
  networks: {
    hardhat: {
    },
    katla: {
      url: "https://rpc.katla.taiko.xyz",
      accounts: [process.env.PRIVATE_KEY],
    }
  },
  solidity: {
    version: "0.8.23",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  mocha: {
    timeout: 40000
  }
}
```
Now create a `.env` file and configure your private key
```env
PRIVATE_KEY=key
```
#### 3. Compilation and Deployment
Once you have developed your smart contract,Create a deployment file called deploy.js. This file is run to compile and deploy your contract to a live network. In this case Katla
```javascript
async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const token = await ethers.deployContract("Token");

  console.log("Token address:", await token.getAddress());
}
//Replace the contract name at token with your contract of choice
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
  ```
Now compile your contract by running 
```bash
$ npx hardhat compile
```
Once compiled we run the deployment script to Katla testnet with the following command
```bash
npx hardhat run scripts/deploy.js --network katla
```
you will get the following logs
```bash
Deploying contracts with the account: 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266
Token address: 0x5FbDB2315678afecb367f032d93F642f64180aa3
```
:::note
Hardhat deployment scripts and network configurations are customisable, Find all the options [here](https://hardhat.org/docs)
:::
## Deploy a contract using Remix

Coming soon!

## Deploy a contract using thirdweb

Coming soon!
