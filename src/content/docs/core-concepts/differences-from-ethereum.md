---
title: Differences from Ethereum
---

Taiko is on a roadmap of achieving **Ethereum equivalence**. In the most ideal case, Taiko doesn't exist and Ethereum as a single chain works at scale. However we are on a road to that end, and not there yet.

You may have heard about Vitalik's / L2Beat's notion of rollup training wheels. Taiko is planning to ship it's mainnnet with **Stage 0**. You can view more about Taiko's rollup training wheels status on L2Beat.

With that out of the way, here are the current differences between Taiko (holesky testnet) and holesky testnet:

# Differences from Ethereum

When we say using Taiko we are referring to interacting with a Taiko RPC node versus an Ethereum RPC node. Ethereum nodes have an: Engine API, Execution client API, etc. Running a Taiko node against the official Hive Tests API is a much better way for you to confirm yourself the behavior of a Taiko node. We are currently working on that.

However you can take a look at at able of the differences here:

| Parameter        | Ethereum                    | Taiko (alpha-6)                       | Reasoning                                                                                                                                                          |
| ---------------- | --------------------------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Block gas limit  | 30,000,000 gas              | 15,000,000 gas                        | Circuit constraint limitation in PSE circuits, fixed by zkVM, chunking, etc.                                                                                       |
| Block gas target | 15,000,000 gas / 12 seconds | TODO (gas per second for L2 EIP-1559) | TODO (gas per second for L2 EIP-1559)                                                                                                                              |
| Block time       | 12 seconds                  | Any                                   | There is no reason to limit the block time on Taiko because the decentralization on the Execution layer does not matter as much as it does on the Consensus layer. |
