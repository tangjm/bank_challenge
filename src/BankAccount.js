class BankAccount {
	#credit;
	#debit;
	#balance;

	// Setters and Getters
	getBalance() {
		return this.#balance;
	}

	setBalance(amount) {
		this.#balance = amount;
	}

	getDebit() {
		return this.#debit;
	}

	setDebit(amount) {
		this.#debit = amount;
	}

	getCredit() {
		return this.#credit;
	}

	setCredit(amount) {
		this.#credit = amount;
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