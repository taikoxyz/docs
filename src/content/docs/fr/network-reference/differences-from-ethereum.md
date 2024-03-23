---
title: Différences avec Ethereum.
description: Page de référence du réseau décrivant les différences entre Taiko et Ethereum.
---

| Paramètre                | Ethereum (Holesky) | Taiko (Katla)                   | Raisonnement                                                                                                                              |
| ------------------------ | ------------------ | ------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| Bloquer la limite de gaz | 30 000 000 de gaz  | 15 000 000 de gaz               | Limitation des contraintes de circuit dans les circuits PSE ; adressé par zkVM, chunking, etc.                                            |
| Bloquer la cible de gaz  | 15 000 000 de gaz  | 60 000 000 de gaz (par bloc L1) | En supposant qu'un temps de blocage L2 d'environ 3 secondes aura une cible d'environ 15 000 000 de gaz.                                   |
| Temps de blocage         | 12 secondes        | ~3 secondes                     | Autoriser un débit plus élevé sur L2 car cela ne menace pas la décentralisation des nœuds de la même manière que sur la couche consensus. |
