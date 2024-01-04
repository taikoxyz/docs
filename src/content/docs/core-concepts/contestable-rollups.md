---
title: Contestable rollups
---

# Prover bonds

- **Liveness bond**: A smaller bond provided by a prover that ensures they are online. It is 250 TTKO (TODO: from config).
- **Validity bond**: A larger bond provided by a prover that ensures their provided proof is valid. It ranges depending on the proof (TODO: from config).

# Contester bonds

- **Contester bond**: A bond put up by a contester that will be slashed if the contested state transition is proven valid by a higher tier proof.

# Further design considerations

- Single tier for everything
