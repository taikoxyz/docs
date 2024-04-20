---
title: Enable a prover
description: This guide will you help you enable your Taiko node as a prover.
---

## Prerequisites

- You are already [running a Taiko node](/guides/run-a-taiko-node).

## Enable a prover with simple-taiko-node

:::note
The SGX registration process now occurs fully onchain! By registering through on-chain RA, TTKOh will be deposited to your prover's L1 Address.
:::

1. A Taiko prover needs to be able to generate SGX proofs at the moment. Please follow the README guide on our [raiko](https://github.com/taikoxyz/raiko/blob/taiko/unstable/README_Docker_and_RA.md) repository.

2. Then set the `SGX_RAIKO_HOST` endpoint in your `.env` file.

3. Set the `L1_PROVER_PRIVATE_KEY` to an L1 account's private key which will send the Prove Block transactions.

4. Set the `MIN_ACCEPTABLE_PROOF_FEE` to an amount that you deem sufficient.

5. Finally set `ENABLE_PROVER` to `true` in simple-taiko-node `.env`.

6. You can then run your prover with `docker compose --profile prover up -d`!

:::note
These are the bare minimum required settings along with a functional Taiko node to run a proposer, feel free to customize the rest of the variables in the .env file as you see fit!
:::

### Approve TaikoL1 as TTKOh spender

You will need TTKOh deposited on the TaikoL1 contract to secure the bond for the proofs you generate.

First, you will need to **approve the TaikoL1 contract as a spender**. Visit the TTKOh contract on Holesky [here](https://holesky.etherscan.io/address/0x6490E12d480549D333499236fF2Ba6676C296011#writeProxyContract).

Next, click the **Connect to Web3** button.

Next, click the **approve** function and set the spender address to the TaikoL1 contract address: `0x79C9109b764609df928d16fC4a91e9081F7e87DB`.

Next, set the amount to at least the minimum bond amount of 250 TTKOh. You will need 250 TTKOh for each bond you sign. After entering 250, you need to set the 18 decimals that the TTKOh contract takes, you can click the plus button and then select 10^18.

Finally, click the **Write** button.
