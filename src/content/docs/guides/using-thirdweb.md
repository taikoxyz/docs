---
title: Deploy a contract using Thirdweb
description: This guide will help you deploy a smart contract on Taiko using Thirdweb.
---
[Thirdweb](https://thirdweb.com/) offers a streamlined solution for deploying smart contracts to any EVM-compatible chain, including Taiko. By simplifying the deployment process, Thirdweb enables developers to focus on building without the hassle of managing private keys, RPC URLs, or deployment scripts. This guide demonstrates deploying a `Lock smart contract` on Taiko using Thirdweb, highlighting the compatibility of Ethereum contracts with Taiko.

For a visual walkthrough, refer to our [video tutorial](https://drive.google.com/file/d/1sPtzs2yWerAIS_DXwgQ5JK5wgR2Amc-S/view?usp=sharing).

## Set up the environment

Before deploying a smart contract on Taiko with Thirdweb, ensure your contracts are ready in a folder or a Hardhat project.This setup can include a Hardhat project or any other structure where your contracts are organized. 

For setup details, see our [Hardhat Deployment](/guides/using-hardhat/) guide on taiko.

:::note
Before proceeding further, it is required for you to set up your wallet. For guidance on this, please refer to the section [Set up your wallet](/guides/set-up-your-wallet/).
:::

## Deploying with Thirdweb

1. **Initialize Your Project**: Navigate to your smart contract project's root directory in the CLI and install Thirdweb globally using `npm i -g thirdweb`.

2. **Deploy Your Contract**: Execute `thirdweb deploy` in the CLI. This command initiates the deployment process.

3. **Authorize Your Device**: A browser window will prompt you to connect and authorize your wallet. This step ensures secure deployment from your chosen wallet.

   ![Authorize Device](~/assets/content/docs/guides/thirdweb-authorize.png)

4. **Access the Deployment Link**: The CLI will provide a link. Open this link to proceed with deployment via the Thirdweb UI.

5. **Complete Deployment Details**:
    - Fill in the necessary fields in the Thirdweb UI.
    - Select `Taiko Network` from the Chain drop-down menu.
    - Opt for `Add to dashboard` if you wish to manage this contract from the Thirdweb dashboard.
    - Click `Deploy Now` and sign the transaction in your connected wallet.

   ![Deployment Details](~/assets/content/docs/guides/thirdweb-deploy.png)

For a more detailed documentation on deployments through Thirdweb using CLI, visit [Thirdweb CLI Docs](https://portal.thirdweb.com/cli).

## Managing Your Contract

After deployment, the Thirdweb dashboard allows you to manage and interact with your contract seamlessly. 
Deploying with Thirdweb not only streamlines the process but also enhances security by supporting browser-based wallets like MetaMask and others for deployment activities.