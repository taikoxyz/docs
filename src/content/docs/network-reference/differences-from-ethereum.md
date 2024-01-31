---
title: Differences from Ethereum
description: Network reference page describing the differences between Taiko and Ethereum.
---

| Parameter        | Ethereum (Holesky) | Taiko (Katla)                 | Reasoning                                                                                                                |
| ---------------- | ------------------ | ----------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| Block gas limit  | 30,000,000 gas     | 15,000,000 gas                | Circuit constraint limitation in PSE circuits; addressed by zkVM, chunking, etc.                                         |
| Block gas target | 15,000,000 gas     | 60,000,000 gas (per L1 block) | Assuming an L2 block time of ~3 seconds will have a ~15,000,000 gas target.                                              |
| Block time       | 12 seconds         | ~3 seconds                    | Allow for greater throughput on L2 as it does not threaten the node decentralization the same as on the consensus layer. |

## Transaction types
### Legacy (type 0) without chain ID
Taiko does not support the legacy pre-[EIP-155](https://eips.ethereum.org/EIPS/eip-155) transactions due to security considerations.
