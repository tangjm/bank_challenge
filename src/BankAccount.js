class BankAccount {
	#credit;
	#debit;
	#balance;

	deposit(amount) {
		this.#credit += amount;
		this.#balance += amount;
	}

	withdraw(amount) {
		this.#debit -= amount;
		this.#balance -= amount;
	}

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
}

module.exports = BankAccount;