---
title: Enable a prover
description: This guide will you help you enable your Taiko node as a prover.
---

## Prerequisites

- You are already [running a Taiko node](/guides/run-a-taiko-node).

## Enable a prover with simple-taiko-node

:::note
A Taiko prover needs to be able to generate **both** SGX and ZK proofs at the moment. We are **not distributing TTKOk** as we are reworking the SGX registration process to occur fully onchain.
:::

### Approve TaikoL1 as TTKOk spender

You will need TTKOk deposited on the TaikoL1 contract to secure the bond for the proofs you generate.

First, you will need to **approve the TaikoL1 contract as a spender**. Visit the TTKOk contract on Holesky [here](https://holesky.etherscan.io/address/0x8C5ac30834D3f85a66B1D19333232bB0a9ca2Db0#writeProxyContract).

Next, click the **Connect to Web3** button.

Next, click the **approve** function and set the spender address to the TaikoL1 contract address: `0xB20BB9105e007Bd3E0F73d63D4D3dA2c8f736b77`.

Next, set the amount to at least the minimum bond amount of 250 TTKOk. You will need 250 TTKOk for each bond you sign. After entering 250, you need to set the 18 decimals that the TTKOk contract takes, you can click the plus button and then select 10^18.

Finally, click the **Write** button.
