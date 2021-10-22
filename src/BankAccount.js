const Transaction = require("./Transaction");

class BankAccount {
	#balance;
	#transactions;
	#transactionData;

	constructor() {
		this.#balance = 0;
		this.#transactions = [];
		this.#transactionData = [];
	}

	// Getters
	getBalance() {
		return this.#balance;
	}

	getTransactions() {
		return this.#transactions;
	}

	// Methods
	deposit(amount, dateObj) {
		this.#balance += amount;

		this.#transactionData = [dateObj, "deposit", amount, this.#balance];

		let transactionObj = this.createTransaction();

		this.addTransaction(transactionObj);
	}

	createTransaction(transactionObj = new Transaction(...this.#transactionData)) {
		return transactionObj;
	}

	addTransaction(transactionObj) {
		this.#transactions.push(transactionObj);
	}

	withdraw(amount, dateObj) {
		this.#balance -= amount;

		this.#transactionData = [dateObj, "withdrawal", amount, this.#balance];

		let transactionObj = this.createTransaction();

		this.addTransaction(transactionObj);
	}


}

module.exports = BankAccount;