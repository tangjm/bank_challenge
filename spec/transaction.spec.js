const Transaction = require(`../src/Transaction`);

describe("Test suite for Transaction class", () => {
	let expectedOutput, actualOutput;
	let transaction;
	beforeEach(() => {
		transaction = new Transaction([], "deposit", 10, 10);
	})

	afterEach(() => {
		transaction = null;
	})

	it("Test 1a: Transactions keep track of deposits", () => {
		expectedOutput = 10;
		actualOutput = transaction.getCredit();

		expect(actualOutput).toEqual(expectedOutput);
	})

	it("Test 1b: Transactions keep track of withdrawals", () => {
		transaction = new Transaction([], "withdrawal", 10, 10);
		expectedOutput = 10;
		actualOutput = transaction.getDebit();

		expect(actualOutput).toEqual(expectedOutput);
	})

	it("Test 2: Transactions have a date array", () => {
		expectedOutput = [];
		actualOutput = transaction.getDate();

		expect(actualOutput).toEqual(expectedOutput);
	})

	it("Test 3: Transactions have a balance property", () => {
		expectedOutput = 10;
		actualOutput = transaction.getNewBalance();

		expect(actualOutput).toEqual(expectedOutput);
	})

	it("Test 4: Transactions cannot involve both a deposit and a withdrawal", () => {
		expectedOutput = transaction.getCredit();
		actualOutput = transaction.getDebit();

		expect(actualOutput).not.toEqual(expectedOutput);
	})
})