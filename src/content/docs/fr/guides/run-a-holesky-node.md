---
title: Exécuter un nœud Holesky
description: Ce guide vous aidera à mettre en place un nœud d'archive Holesky.
---

Ce guide vous aidera à mettre en place un nœud d'archive Holesky.

## Conditions préalables

- [Docker](https://docs.docker.com/engine/install/) est installé et **en cours d'exécution** .
- [Git](https://github.com/git-guides/install-git/) est installé.
- Si vous utilisez Windows, vous devez installer [Git BASH](https://gitforwindows.org/) ou [WSL](https://learn.microsoft.com/en-us/windows/wsl/install) à utiliser comme terminal.

## Pas

### 1. Cloner eth-docker

```bash
git clone https://github.com/eth-educators/eth-docker
cd eth-docker
```

### 2. Effectuez la configuration de démarrage rapide eth-docker

Complétez le [démarrage rapide eth-docker](https://eth-docker.net/Usage/QuickStart/). Vous devrez exécuter la commande config :

```bash
./ethd config
```

Assurez-vous d'activer les tableaux de bord Grafana.

### 3. Exposez les ports RPC

Pour exposer les ports RPC du nœud (pour qu'un nœud Taiko puisse y effectuer des appels), vous pouvez ajouter `el-shared.yml` à la liste des fichiers dans la `COMPOSE_FILE` variable de votre `.env` fichier :

```txt "el-shared.yml"
COMPOSE_FILE=lighthouse-cl-only.yml:geth.yml:el-shared.yml
```

Gardez à l’esprit que ce n’est pas crypté , vous ne devez donc pas l’exposer à Internet. eth-docker propose quelques autres options que vous pouvez lire [ici](https://eth-docker.net/Usage/Advanced#sharing-rpc-and-rest-ports).

### 4. Activer le nœud d'archive

Également dans le `.env` fichier, définissez la valeur `ARCHIVE_NODE` sur `true` :

```txt "true"
ARCHIVE_NODE=true
```

### 5. Démarrez les conteneurs Docker

```bash
./ethd up
```

### 6. Vérifiez que votre nœud fonctionne correctement

Vous pouvez visiter le [tableau de bord Grafana](https://eth-docker.net/Usage/Dashboards/#connecting-to-local-grafana) sur lequel il devrait s'exécuter `localhost:3000` pour vérifier si votre n

## Didacticiel vidéo

Voir [Exécuter un nœud d'archive Sepolia L1 (YouTube)](https://www.youtube.com/watch?v=7Lg_cY7iP2o), la seule différence est que vous devez sélectionner **Holesky testnet** .
