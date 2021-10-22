class Transaction {
	#credit;
	#debit;
	#date;
	#newBalance;
	#type;

	constructor(dateObj, type, amount, newBalance) {
		if (type === "deposit") {
			this.#credit = amount;
		} else {
			this.#debit = amount;
		}
		this.#type = type;
		this.#date = dateObj;
		this.#newBalance = newBalance;
	}

	// Getters

	getCredit() {
		return this.#credit;
	}

	getDebit() {
		return this.#debit;
	}

	getDate() {
		return this.#date;
	}

	getNewBalance() {
		return this.#newBalance;
	}

	getType() {
		return this.#type;
	}
}


module.exports = Transaction;