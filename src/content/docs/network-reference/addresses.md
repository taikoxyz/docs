---
title: Addresses
description: Network reference page describing various important addresses on Taiko.
---

## Ethereum (Holesky) contracts

| Contract Name        | Address                                      |
| -------------------- | -------------------------------------------- |
| TaikoL1              | `0xB20BB9105e007Bd3E0F73d63D4D3dA2c8f736b77` |
| RollupAddressManager | `0xd331B9d877cA3B384ee837112C5A9eD4C3e11cd6` |
| ERC20Vault           | `0x095DDce4fd8818aD159D778E6a9898A2474933ca` |
| ERC721Vault          | `0x91bc040cABBB29A5A9520a47d575D3dda6EE4F05` |
| ERC1155Vault         | `0x5d538f8D8e85598d2F118A16EE67c618a56d8c74` |
| Bridge               | `0xf458747c6d6db57970dE80Da6474C0A3dfE94BF1` |
| SignalService        | `0x08a3f537c4bbe8B6176420f4Cd0C84b02172dC65` |
| SharedAddressManager | `0xD0C2587fa6E3C0B67c4D68561a59dB69439AbF2a` |
| TaikoToken           | `0x8C5ac30834D3f85a66B1D19333232bB0a9ca2Db0` |
| GuardianProver       | `0x714b6a4eA9b94A8a7D9FD362ed72630688C8898c` |
| AssignmentHook       | `0x41e574f051Bd887024B4dEe2a7F684D6936c4488` |
| TimelockController   | `0x63ca326B99651E7D0E42702dDb277747ea9E15dD` |
| SgxVerifier          | `0xA30517F2Ee52634ddD9a3473FB50B162C772c84D` |
| HorseToken           | `0x0469760d321D08AB4fce75E2E799902C9f55dA59` |

## Taiko (Katla) contracts

| Contract Name        | Address                                      |
| -------------------- | -------------------------------------------- |
| Bridge               | `0x1670080000000000000000000000000000000001` |
| ERC20Vault           | `0x1670080000000000000000000000000000000002` |
| ERC721Vault          | `0x1670080000000000000000000000000000000003` |
| ERC1155Vault         | `0x1670080000000000000000000000000000000004` |
| SignalService        | `0x1670080000000000000000000000000000000005` |
| TaikoL2              | `0x1670080000000000000000000000000000010001` |
| RollupAddressManager | `0x1670080000000000000000000000000000010002` |
| BridgedHorseToken    | `0xD69d3e64D71844BBDdA51Cd7f23ED3631E9FAC49` |
| BridgedTaikoToken    | `0x2a99837850543e223C134687f0c2B7E059873047` |

## Rollup contracts owner

The rollup contracts owner can be found on the block explorer for the contracts shown above. The deployers public key is: `0x1D2D1bb9D180541E88a6a682aCf3f61c1605B190`. It is pre-minted with 1 billion TTKOk tokens and max uint128 ether.

## Taiko Labs' proposers and provers addresses

| Name                                                   | Address                                      |
| ------------------------------------------------------ | -------------------------------------------- |
| Proposer #1                                            | `0xe1E210594771824dAd216568B91c9Cb4CEED361C` |
| Prover #1                                              | `0x230b361692abac7B70C6D697E2770E8c18ba1FC1` |
| Prover #2 (with `--prover.proveUnassignedBlocks` flag) | `0x5D77525449ECf427F3460B4a046BEAd5cbFD6A0A` |

## Taiko Labs' bootnode addresses

Find the latest bootnodes here in [simple-taiko-node](https://github.com/taikoxyz/simple-taiko-node/blob/main/.env.sample).
