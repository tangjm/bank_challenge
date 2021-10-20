const Transaction = require("./Transaction");

class BankAccount {
	#credit;
	#debit;
	#balance;
	#transactions;

	constructor() {
		this.#credit = 0;
		this.#debit = 0;
		this.#balance = 0;
		this.#transactions = [];
	}

	// Getters
	getBalance() {
		return this.#balance;
	}

	getDebit() {
		return this.#debit;
	}

	getCredit() {
		return this.#credit;
	}

	getTransactions() {
		return this.#transactions;
	}

	// Methods
	deposit(amount) {
		this.#credit += amount;
		this.#balance += amount;
		// Also pass the amount into the transaction constructor
		let transaction = new Transaction();
		this.#transactions.push(transaction);
	}

	withdraw(amount) {
		this.#debit -= amount;
		this.#balance -= amount;
	}


}

module.exports = BankAccount;