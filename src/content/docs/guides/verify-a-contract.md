---
title: Verify a contract
---

## Prerequisites

You have a contract deployed on Taiko and the source code available.

## Verify a contract with Foundry

Replace contract address and filepath to contract below, and then execute in terminal to verify your contract.

```bash
forge verify-contract 0x726819252e346278869d178084dA2cE10ac8A56D src/Counter.sol:Counter \
  --verifier-url https://blockscoutapi.katla.taiko.xyz/api\? \
  --verifier blockscout
```

## Verify a contract with Hardhat

Coming soon!

## Verify a contract with Blockscout

Coming soon!
