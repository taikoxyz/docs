---
title: Enable a prover
description: This guide will you help you enable your Taiko node as a prover.
---

## Prerequisites

- You are already [running a Taiko node](/guides/run-a-taiko-node).

## Enable a prover with simple-taiko-node

:::note
A Taiko prover needs to be able to generate **both** SGX and ZK proofs at the moment. We are **not distributing TTKOh** as we are reworking the SGX registration process to occur fully onchain.
:::

### Approve TaikoL1 as TTKOh spender

You will need TTKOk deposited on the TaikoL1 contract to secure the bond for the proofs you generate.

First, you will need to **approve the TaikoL1 contract as a spender**. Visit the TTKOh contract on Holesky [here](https://holesky.etherscan.io/address/0x6490E12d480549D333499236fF2Ba6676C296011#writeProxyContract).

Next, click the **Connect to Web3** button.

Next, click the **approve** function and set the spender address to the TaikoL1 contract address: `0x79C9109b764609df928d16fC4a91e9081F7e87DB`.

Next, set the amount to at least the minimum bond amount of 250 TTKOh. You will need 250 TTKOh for each bond you sign. After entering 250, you need to set the 18 decimals that the TTKOh contract takes, you can click the plus button and then select 10^18.

Finally, click the **Write** button.
