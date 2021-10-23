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
	let statementPrinter, testBankStatement;
	beforeEach(() => {
		statementPrinter = new StatementPrinter();
		testBankStatement = new TestBankStatement();
	})
	afterEach(() => {
		statementPrinter = null;
		testBankStatement = null;
	})

	it("Test 1: Testing that we can print out the headers for the bank statement", () => {
		// Act
		let spy = spyOn(console, "log");
		statementPrinter.printHeader(testBankStatement);

		// Assert
		expect(spy).toHaveBeenCalledWith("header");
	})

	it("Test 2: Testing that we can print out the entire recorded transaction history", () => {
		// Act
		let spy = spyOn(console, "log");

		statementPrinter.printEachItem(testBankStatement);
		// Assert
		expect(spy).toHaveBeenCalledTimes(2)

	})
})