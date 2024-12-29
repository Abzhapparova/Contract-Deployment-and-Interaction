# Contract-Deployment-and-Interaction
## Project Overview

This project demonstrates the development and deployment of a smart contract called **AssignmentContract**. The contract allows:

- Receiving Ether through a payable function.
- Checking the balance of the contract.
- Allowing only the owner to withdraw all funds.

The contract is deployed on a local Ethereum blockchain using Ganache and interacted with through Web3.js.

---

## Features

### Functions

1. **receive()**:

   - Automatically triggered when Ether is sent to the contract.
   - Emits a `Received` event with the sender's address and the amount sent.

2. **getBalance()**:

   - Returns the current balance of the contract in Wei.

3. **withdraw()**:

   - Allows the owner to withdraw all funds from the contract.
   - Ensures that only the owner can call this function.

---

## Installation and Setup

### Prerequisites

- [Node.js](https://nodejs.org/) (v14+)
- [Ganache](https://trufflesuite.com/ganache/)
- [MetaMask](https://metamask.io/)

### Steps

1. **Clone the repository**:

   ```
   git clone <repository-link>
   cd <repository-folder>
   ```

2. **Install dependencies**:

   ```
   npm install
   ```

3. **Start Ganache**:

   - Open Ganache and select Quickstart Ethereum.

4. **Configure MetaMask**:

   - Add Ganache network with RPC URL `http://127.0.0.1:7545` and Chain ID `1337`.
   - Import one of the accounts from Ganache into MetaMask.

5. **Deploy the Contract**:

   ```
   node scripts/deploy.js
   ```

6. **Interact with the Contract**:

   ```bash
   node scripts/interact.js
   ```

---

## Example Usage

### Deploy Contract

- The contract will be deployed using the first account in Ganache.
- The console will display the address of the deployed contract.
![Interaction Screenshot](screenshots/interaction_screenshot.png.zip)
### Send Ether to the Contract

1. Set the desired amount in MetaMask.
2. Send Ether to the contract address.
![Interaction Screenshot](screenshots/interaction_screenshot.png.zip)
### Check Contract Balance

- Run `getBalance()` to retrieve the contract's balance.

### Withdraw Funds

- Ensure you are using the owner's account.
- Call `withdraw()` to transfer all funds to the owner.
![Interaction Screenshot](screenshots/interaction_screenshot.png.zip)
---

## File Structure

```
project/
├── contracts/
│   └── step1.sol
├── scripts/
│   ├── deploy.js
│   ├── interact.js
│   ├── app.js
├── README.md
├── interaction_screenshot.png
├── package.json
└── LICENSE
```

---

## License

This project is licensed under the MIT License.See it here: https://github.com/OpenZepp
elin/openzeppelincontracts/blob/master/LICENSE

---

## References

- [Ganache Documentation](https://trufflesuite.com/ganache/)
- [Web3.js Documentation](https://web3js.readthedocs.io/)
- [MetaMask Documentation](https://metamask.io/)

