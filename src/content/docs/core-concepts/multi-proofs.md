---
title: Multi-proofs
description: Core concept page for "Multi-proofs".
---

Cryptographic implementations are complex and not yet mature. To minimize potential bugs and vulnerabilities, diversity in proof systems is needed. Taiko is one of the advocates who strongly defends the multi-proofs approach in rollups. Taiko's approach aims to increase security and diversity by using multiple proof systems and clients, thus reducing the risk associated with bugs or vulnerabilities in any single system. The approach also includes the integration of different types of proofs.

Taiko propose a robust multi-proof pipeline by translating assembly-level instructions coming from different execution clients into arithmetizations for algebraic or polynomial proof systems. Different backends to encode these arithmetizations, such as SuperNova, Halo2, and eSTARK also can be used, without being limited by using a single protocol.

In addition to ZK proofs, Taiko utilizes SGX (a Trusted Execution Environment developed by Intel) to generate a different type of proof. SGX runs the same code that would be executed on a zkVM, which functions somewhat like a light execution client. Therefore, in contrast to a standard client such as Geth, which requires access to the entire chain state for transaction execution, the proving systems employed by Taiko only need the data essential for verifying blocks. This approach ensures that only necessary data is used and its correctness is verified in conjunction with transaction execution. The necessary data is signed within SGX using a standard ECDSA signature, employing a private key exclusive to SGX. The signature is then verified within the smart contract.
