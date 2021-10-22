class BankStatement {
	#header;
	constructor() {
		this.#header = "date || credit || debit || balance";
	}

	// Getters

	getHeader() {
		return this.#header;
	}

}

module.exports = BankStatement;