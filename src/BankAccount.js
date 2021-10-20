class BankAccount {
	#credit;
	#debit;
	#balance;

	constructor() {
		this.#credit = 0;
		this.#debit = 0;
		this.#balance = 0;
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

	// Methods
	deposit(amount) {
		this.#credit += amount;
		this.#balance += amount;
	}

	withdraw(amount) {
		this.#debit -= amount;
		this.#balance -= amount;
	}
}

module.exports = BankAccount;