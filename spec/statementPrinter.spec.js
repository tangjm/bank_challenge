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
		spyOn(console, "log");
		statementPrinter.printHeader(testBankStatement);

		expect(console.log).toHaveBeenCalledWith("header");
	})

	it("Test 2: Testing that we can print out the entire recorded transaction history", () => {
		spyOn(console, "log");
		statementPrinter.printTransactions(testBankStatement);

		expect(console.log).toHaveBeenCalledTimes(2)
	})

	it("Test 3: Testing that the recorded transaction history is printed out in reverse chronological order", () => {
		spyOn(console, "log");
		statementPrinter.printTransactions(testBankStatement);

		expect(console.log.calls.argsFor(0)).toEqual([2]);
		expect(console.log.calls.argsFor(1)).toEqual([1]);
	})
})