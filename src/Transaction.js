class Transaction {
	#credit;
	#debit;
	#dateArray;
	#newBalance;

	constructor(dateArray, type, amount, newBalance) {
		if (type === "deposit") {
			this.#credit = amount;
		} else {
			this.#debit = amount;
		}
		this.#dateArray = dateArray;
		this.#newBalance = newBalance;
	}

	// Getters

	getCredit() {
		return this.#credit;
	}

	getDebit() {
		return this.#debit;
	}

	getDateArray() {
		return this.#dateArray;
	}

	getNewBalance() {
		return this.#newBalance;
	}
}


module.exports = Transaction;