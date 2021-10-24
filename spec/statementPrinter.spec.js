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

	it("Test 1: Prints out the headers for the bank statement", () => {
		spyOn(console, "log");

		statementPrinter.printHeader(testBankStatement);

		expect(console.log).toHaveBeenCalledWith("header");
	})

	it("Test 2: Prints out the entire recorded transaction history", () => {
		spyOn(console, "log");

		statementPrinter.printTransactions(testBankStatement);

		expect(console.log).toHaveBeenCalledTimes(2)
	})

	it("Test 3: Transaction history is printed out in reverse chronological order", () => {
		spyOn(console, "log");

		statementPrinter.printTransactions(testBankStatement);

		expect(console.log.calls.argsFor(0)).toEqual([2]);
		expect(console.log.calls.argsFor(1)).toEqual([1]);
	})

	it("Test 4: 'print()' method prints both header and transactions", () => {
		spyOn(statementPrinter, "printTransactions");
		spyOn(statementPrinter, "printHeader");

		statementPrinter.print(testBankStatement);

		expect(statementPrinter.printHeader).toHaveBeenCalled();
		expect(statementPrinter.printTransactions).toHaveBeenCalled();
	})

	it("Test 5: 'print()' method prints the header first", () => {
		let spy1 = spyOn(statementPrinter, "printTransactions");
		let spy2 = spyOn(statementPrinter, "printHeader");

		statementPrinter.print(testBankStatement);

		expect(spy2).toHaveBeenCalledBefore(spy1);
	})
})