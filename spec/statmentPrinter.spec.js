const StatementPrinter = require("../src/StatementPrinter");


class TestBankStatement {
	#header;
	constructor() {
		this.#header = "header";
	}
	getHeader() {
		return this.#header;
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

	// it("Test 1: Testing that the StatementPrinter is able to print out the entire recorded transaction history", () => {
	// 	// Arrange

	// 	// Act
	// 	// Assert

	// })
})