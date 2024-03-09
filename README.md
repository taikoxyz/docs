### 1. Open Remix IDE

https://remix.ethereum.org

### 2. Create a new `.sol` file

![new file](~/assets/content/docs/guides/newfile.png)

- Give it any name, for example `Counter.sol`.
- Fill with this example code:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.7.0;
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v3.4.0-solc-0.7/contracts/token/ERC20/ERC20.sol";
contract Token is ERC20 {
    constructor () ERC20("Example Token Katla", "ETK") {
        _mint(msg.sender, 1000000 * (10 ** uint256(decimals())));
    }
}
```

### 3. Compile

- Change the Compiler version to `0.7.0+commit.9e61f92b`

![new file](~/assets/content/docs/guides/compiler.png)

- Then compile it.

### 4. Deploy

- Change the Environment to `Injected Provider`

![new file](~/assets/content/docs/guides/provider.png)

![new file](~/assets/content/docs/guides/transact.png)

- Then click `transact`

- Finally, verify the smart contract using [Blockscout](/guides/verify-a-contract/#verify-a-contract-with-hardhat-or-other-alternatives)

## Deploy a contract using thirdweb
