const StatementPrinter = require("../src/StatementPrinter");


class TestBankStatement {
	#header;
	#formattedTransactions;
	constructor() {
		this.#header = "header";
		this.#formattedTransactions = [1, 2];
	}
	getHeader() {
		return this.#header;
	}
	getFormattedTransactions() {
		return this.#formattedTransactions;
	}

}

describe("Test suite for StatementPrinter", () => {
	it("Test 1: Testing that we can print out the headers for the bank statement", () => {
		// Arrange
		let statementPrinter = new StatementPrinter();
		let testBankStatement = new TestBankStatement();

		// Act
		let spy = spyOn(console, "log");
		statementPrinter.printHeader(testBankStatement);

		// Assert
		expect(spy).toHaveBeenCalledWith("header");
	})

	it("Test 2: Testing that we can print out the entire recorded transaction history", () => {
		// Arrange
		let statementPrinter = new StatementPrinter();
		let testBankStatement = new TestBankStatement();

		// Act
		let spy = spyOn(console, "log");

		statementPrinter.printEachItem(testBankStatement);
		// Assert
		expect(spy).toHaveBeenCalledTimes(2)

	})
})