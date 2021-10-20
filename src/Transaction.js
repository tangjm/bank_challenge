class Transaction {
	#credit;
	#dateArray;
	#newBalance;

	constructor(dateArray, amount, newBalance) {
		this.#credit = amount;
		this.#dateArray = dateArray;
		this.#newBalance = newBalance;
	}

	// Getters

	getCredit() {
		return this.#credit;
	}

	getDateArray() {
		return this.#dateArray;
	}

	getNewBalance() {
		return this.#newBalance;
	}
}


module.exports = Transaction;