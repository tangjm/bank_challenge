class Transaction {
	#credit;
	#dateArray;

	constructor(dateArray, amount, newBalance) {
		this.#credit = amount;
		this.#dateArray = dateArray;
	}

	// Getters

	getCredit() {
		return this.#credit;
	}

	getDateArray() {
		return this.#dateArray;
	}
}


module.exports = Transaction;