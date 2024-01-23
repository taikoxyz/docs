---
title: Multi-proofs
description: Core concept page for "Multi-proofs".
---

A great resource to learn about Taiko's approach to security with multi-proofs is the Twitter thread [here](https://x.com/taikoxyz/status/1745546868028068273).

Cryptographic implementations are complex and not yet mature. To minimize potential bugs and vulnerabilities, diversity in proof systems is needed. Taiko is one of the advocates who strongly defends the multi-proofs approach in rollups. Taiko's approach aims to increase security and diversity by using multiple proof systems and clients, thus reducing the risk associated with bugs or vulnerabilities in any single system. The approach also includes the integration of different types of proofs.

Taiko proposes a robust multi-proof pipeline with [powdr labs](https://www.powdr.org/), which translates assembly-level instructions coming from different execution clients into arithmetizations for algebraic or polynomial proof systems. Different backends to encode these arithmetizations, such as SuperNova, Halo2, and eSTARK can also be used, without being limited by using a single protocol.

In addition to ZK proofs, Taiko utilizes SGX (a Trusted Execution Environment developed by Intel) to generate a different type of proof. SGX runs the same code that would be executed on a zkVM, which functions somewhat like a light execution client. Therefore, all proof systems verify the same underlying light client's execution, potentially allowing for the reuse of necessary data. The necessary data is signed within SGX using a standard ECDSA signature, employing a private key exclusive to SGX. The signature is then verified within the smart contract.
