class Transaction {
	#credit;

	constructor(dateArray, amount, newBalance) {
		this.#credit = amount;
	}

	// Getters

	getCredit() {
		return this.#credit;
	}
}

module.exports = Transaction;