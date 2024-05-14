---
title: Taiko Node API
description: The Taiko Node API describes the various API surfaces of a Taiko node.
---

Using a Taiko node should feel the same as using any other L1 node, because we essentially re-use the L1 client and make a few backwards-compatible modifications. You can first read about the architecture of Taiko nodes <a href="/core-concepts/taiko-nodes" target="_blank" rel="noopener noreferrer">here</a>.

## Differences from a Geth client

View the fork diff page to see the minimal set of changes made to Geth <a href="https://geth.taiko.xyz" target="_blank" rel="noopener noreferrer">here</a>.

## Execution JSON-RPC API

Check out the execution client spec <a href="https://ethereum.github.io/execution-apis/api-documentation/" target="_blank" rel="noopener noreferrer">here</a>.

## Engine API

Check out the engine API spec <a href="https://github.com/ethereum/execution-apis/blob/main/src/engine/common.md" target="_blank" rel="noopener noreferrer">here</a>.

## Hive test harness

If a Taiko node should feel the same as using any other L1 node, it should surely be able to pass the <a href="https://github.com/ethereum/hive" target="_blank" rel="noopener noreferrer">hive e2e test harness</a>. At the time of writing, the hive tests are actually one of the best references for what the API of an Ethereum node actually is.

We're working on integrating with hive, so stay tuned!
