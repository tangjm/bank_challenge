const Transaction = require("./Transaction");

class BankAccount {
	#credit;
	#debit;
	#balance;
	#transactions;
	#transactionData;

	constructor() {
		this.#credit = 0;
		this.#debit = 0;
		this.#balance = 0;
		this.#transactions = [];
		this.#transactionData = [];
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
	deposit(amount, dateObj) {
		this.#credit += amount;
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
		this.#debit -= amount;
		this.#balance -= amount;

		this.#transactionData = [dateObj, "withdrawal", amount, this.#balance];

		let transactionObj = this.createTransaction();

		this.addTransaction(transactionObj);
	}


}

module.exports = BankAccount;