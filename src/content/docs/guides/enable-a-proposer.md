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

1. First, you will need to have a prover from [the marketplace](/resources/prover-marketplace) (this is the only option as running your own prover is not currently supported).

2. Then you can set `PROVER_ENDPOINTS` in simple-taiko-node `.env` file to the prover's endpoint.

3. Next, set the `L1_PROPOSER_PRIVATE_KEY` to an L1 account's private key which will send the Propose Block transactions.

4. Finally set `ENABLE_PROPOSER` to `true` in simple-taiko-node `.env`.
