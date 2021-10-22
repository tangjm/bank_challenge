const Transaction = require(`../src/Transaction`);

// class TestBankAccount {
// 	deposit(amount) {

// 	};
// }

describe("Test suite for Transaction class", () => {
	let expectedOutput, actualOutput;
	let transaction;
	beforeEach(() => {
		transaction = new Transaction([], "deposit", 10, 10);
	})

	afterEach(() => {
		transaction = null;
	})

	it("Test 1 : Testing that transactions can keep track of deposits", () => {
		// Arrange
		// let transaction = new Transaction(dateArray, depositAmount/withdrawAmount, newBalance);
		expectedOutput = 10;

		// Act
		actualOutput = transaction.getCredit();

		// Assert
		expect(actualOutput).toEqual(expectedOutput);
	})

	it("Test 1b: Testing that transactions can keep track of withdrawals", () => {
		// Arrange
		transaction = new Transaction([], "withdrawal", 10, 10);
		expectedOutput = 10;
		// Act
		actualOutput = transaction.getDebit();
		// Assert
		expect(actualOutput).toEqual(expectedOutput);
	})

	it("Test 2: Testing that all transactions have a date array", () => {
		// Arrange
		expectedOutput = [];
		// Act
		actualOutput = transaction.getDateArray();
		// Assert
		expect(actualOutput).toEqual(expectedOutput);
	})

	it("Test 3: Testing that all transactions have a balance property", () => {
		// Arrange
		expectedOutput = 10;
		// Act
		actualOutput = transaction.getNewBalance();
		// Assert
		expect(actualOutput).toEqual(expectedOutput);
	})

	it("Test 4: Testing that transactions cannot involve both a deposit and a withdrawal", () => {
		// Arrange
		expectedOutput = transaction.getCredit();

		// Act
		actualOutput = transaction.getDebit();

		// Assert
		expect(actualOutput).not.toEqual(expectedOutput);
	})
})

describe("Test suite for the dateArray", () => {
	let expectedOutput, actualOutput;
	let transaction;
	// beforeEach(() => {
	// 	transaction = new Transaction([], "deposit", 10, 10);
	// })

	// it("Test 5a: Testing that the dateArray must have exactly 3 elements(day, month, year)", () => {
	// 	// Arrange
	// 	expectedOutput = "Error, not a dateArray";
	// 	// Act
	// 	actualOutput = new Transaction([], "deposit", 10, 10);
	// 	// Assert
	// 	expect(actualOutput).toEqual(expectedOutput);
	// })
})