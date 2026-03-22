# Multi-Sig Vault Core

An industry-standard implementation of a Multi-Signature wallet. This contract requires a predefined number of owners to confirm a transaction before it can be executed, mitigating the risk of single-point-of-failure in private key management.

## Key Features
* **Customizable Thresholds:** Set $m$ signatures required out of $n$ total owners.
* **Transaction Lifecycle:** Propose, Confirm, and Execute flow.
* **Security:** Prevents double-voting and unauthorized execution.
* **Flat Structure:** Optimized for quick deployment and easy auditing.

## How to Use
1. **Deploy:** Pass an array of owner addresses and the required number of confirmations to the constructor.
2. **Submit:** Any owner can call `submitTransaction` with destination, value, and data.
3. **Confirm:** Other owners call `confirmTransaction(txIndex)`.
4. **Execute:** Once the threshold is met, any owner can call `executeTransaction(txIndex)`.
