---
title: Enable a proposer
description: This guide will you help you enable your Taiko node as a proposer.
---

## Prerequisites

- You are already [running a Taiko node](/guides/run-a-taiko-node).

## Using `stn`

1. Install [stn](https://github.com/d1onys1us/stn) if you haven't already.
2. Execute `stn config proposer` in your terminal and walk through the steps.

## Using simple-taiko-node

1. First, you will need to have a prover from [the marketplace](/resources/prover-marketplace) or [run your own SGX prover](/guides/enable-a-prover).

2. You MUST set `PROVER_ENDPOINTS` in simple-taiko-node `.env` file to the your SGX prover's endpoint or one from the marketplace. If you do not set it and leave it default while not running a prover, **your proposer will not work**.

3. Next, set the `L1_PROPOSER_PRIVATE_KEY` to an L1 account's private key which will send the Propose Block transactions.

4. Then, set the `L2_SUGGESTED_FEE_RECIPIENT` to an L2 account's public key that will receive the fee.

5. Finally set `ENABLE_PROPOSER` to `true` in simple-taiko-node `.env`.

6. Now that the proposer is configured properly, you can run it with `docker compose --profile proposer up -d`!

:::note
These are the bare minimum required settings along with a functional Taiko node to run a proposer, feel free to customize the rest of the variables in the .env file as you see fit!
:::
