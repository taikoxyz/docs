---
title: Deploy a contract using Remix
description: This guide will help you deploy a smart contract on Taiko using Remix.
---
Deploying a smart contract can be straightforward using the Remix IDE, a powerful open-source tool that runs in the browser and provides an environment for writing Solidity smart contracts, compiling them, and deploying them to various Ethereum networks. This guide demonstrates deploying a `Token smart contract` on Taiko using Remix IDE, highlighting the compatibility of Ethereum contracts with Taiko. 

For a visual walkthrough, refer to our video tutorial (coming soon).

### Open Remix IDE
Start by navigating to the Remix IDE at https://remix.ethereum.org.
:::note
Before proceeding further, it is required for you to set up your wallet. For guidance on this, please refer to the section [Set up your wallet](/guides/set-up-your-wallet/) .
:::

### Create a new `.sol` file

In the Remix file explorer, create a new Solidity file:

- Click on the `Create New File` icon in the file explorer pane.
- Name the file `Token.sol` or any other name you prefer.


    ![new file](~/assets/content/docs/guides/newfile.png)

#### Example Code
Copy and paste the following example code into your new file:

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
This code defines an `ERC20` token named "Example Token Katla" with the symbol `ETK` and mints 1 million tokens to the deployer's address.

### Compile the Contract
Before deploying, you need to compile the contract:

- Navigate to the Solidity compiler tab in Remix.
- Select the compiler version `0.7.0+commit.9e61f92b` from the dropdown menu to match the version used in your contract.
- Click the "Compile" button to compile your contract.

    ![new file](~/assets/content/docs/guides/compiler.png)

### Deploy the Contract

After compiling, switch to the deployment environment:

- Go to the "Deploy & Run Transactions" tab.
- From the "Environment" dropdown, select "Injected Provider" to use a web3 provider like MetaMask.
- Ensure your MetaMask (or other web3 provider) is connected to the desired network (e.g., Ethereum Mainnet, Ropsten Testnet).

    ![new file](~/assets/content/docs/guides/provider.png)

- Click the "Deploy" button to deploy your contract. MetaMask or your chosen web3 provider will prompt you to confirm the transaction.
You can now check your deployed contract on [blockscout explorer](https://explorer.katla.taiko.xyz/) using the `deployed contract address`.

    ![new file](~/assets/content/docs/guides/transact.png)

- Then click `transact`

After setting up your contract for deployment, finalize the process by clicking the transact button. This action initiates the deployment transaction, prompting your web3 provider (e.g., MetaMask) to open a confirmation window. Review the transaction details, then confirm to deploy your contract to the blockchain. Once confirmed, your contract will be deployed, and you can track its deployment status in the Remix IDE's console output or on [blockscout explorer](https://explorer.katla.taiko.xyz/).