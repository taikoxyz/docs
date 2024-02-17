---
title: Deploy a contract using Foundary
description: This guide will help you deploy a smart contract on Taiko using Foundary.
---
Any smart contract deployable to the Ethereum network can be deployed easily on Taiko. This guide demonstrates deploying a Counter smart contract on Taiko using Foundry, highlighting the compatibility of Ethereum contracts with Taiko. 

For a visual walkthrough, refer to our [video tutorial](https://www.loom.com/share/41dcd20628774d3bbcce5edf2647312f).

## Set up the environment

Foundry streamlines smart contract development with tools for dependency management, compilation, testing, deployment, and blockchain interaction via CLI or Solidity scripts.

:::note
If you're on Windows, you will need to install and use [Git BASH](https://gitforwindows.org/) or [WSL](https://learn.microsoft.com/en-us/windows/wsl/install),as your terminal, since Foundryup currently does not support Powershell or Cmd.
:::

## Install Foundry

Open your terminal and execute the installation command
```bash
curl -L https://foundry.paradigm.xyz | bash
foundryup
```
This command downloads and runs the Foundry installer (foundryup), which sets up the Foundry toolchain on your system. Follow any on-screen instructions to complete the installation.

For detailed installation guidance and additional resources, visit [Foundry Installation](https://book.getfoundry.sh/getting-started/installation).

## Create a project
Start your new smart contract project in Foundry
```bash
forge init hello_foundry && cd hello_foundry
```
forge `init hello_foundry` creates a new directory named `hello_foundry`, initializing it with Foundry's default project template. This template provides a basic structure for smart contract development. `&& cd hello_foundry` changes the current directory to your newly created project folder, readying your environment for development.

## Build and test your project
To compile your smart contract project, initiate the build process by running.
```bash
forge build
```
Upon successful execution, your terminal will display a confirmation. The output should look something like this

```bash
Compiling 24 files with 0.8.23
Solc 0.8.23 finished in 4.10s
Compiler run successful!
```
This indicates that your project has been compiled without errors.
Next, validate your build by executing the tests with the following command

```bash
forge test
```
This step ensures that your smart contracts behave as expected. The output should look something like this
```bash
No files changed, compilation skipped

Running 2 tests for test/Counter.t.sol:CounterTest
[PASS] testFuzz_SetNumber(uint256) (runs: 256, μ: 27553, ~: 28409)
[PASS] test_Increment() (gas: 28379)
Test result: ok. 2 passed; 0 failed; 0 skipped; finished in 96.80ms
 
Ran 1 test suites: 2 tests passed, 0 failed, 0 skipped (2 total tests)
```

## Deploy your contract
In order to deploy on Taiko, populate the `.env` file. That is,

- Create a `.env` file within the `root` folder.
- Populate `.env` with your `YOUR_PRIVATE_KEY` and the Taiko's `RPC_URL` as follows:

```plaintext
RPC_URL="https://rpc.katla.taiko.xyz"
YOUR_PRIVATE_KEY="<insert private key here>"
```

:::note
Make sure `.env` is in the `.gitignore` file to avoid uploading your `ACCOUNT_PRIVATE_KEY`.
:::

- Load environment variables from .env
```bash
source .env
```
- Confirm the RPC URL is correctly set
```bash
echo $RPC_URL
```

- Deploy the contract located at `src/Counter.sol` by executing the following command
```bash
forge create src/Counter.sol:Counter \
  --rpc-url $RPC_URL \
  --private-key $YOUR_PRIVATE_KEY
```

:::note
Ensure you replace `YOUR_PRIVATE_KEY` with your actual private key that holds some testnet ETH on Taiko.
:::

This command deploys your Counter contract to the Taiko. For additional details on deploying contracts with Foundry, refer to the [Foundry Book on Deploying](https://book.getfoundry.sh/forge/deploying). The output on the terminal looks like as below.

```bash
success.
Deployer: 0xa735b3c25f...
Deployed to: 0x4054415432...
Transaction hash: 0x6b4e0ff93a...
```

You can now check your deployed contract on [blockscout explorer](https://explorer.katla.taiko.xyz/) using the `deployed contract address`.
