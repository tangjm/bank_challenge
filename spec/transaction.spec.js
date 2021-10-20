const Transaction = require(`../src/Transaction`);

// class TestBankAccount {
// 	deposit(amount) {

// 	};
// }

describe("Test suite for Transaction class", () => {
	let expectedOutput, actualOutput;
	let transaction;
	beforeAll(() => {
		transaction = new Transaction([], 10, 10);
	})

	afterAll(() => {
		transaction = null;
	})

	it("Test 1 : Testing that transactions can keep track of deposits/withdrawals", () => {
		// Arrange
		// let transaction = new Transaction(dateArray, depositAmount/withdrawAmount, newBalance);
		expectedOutput = 10;

		// Act
		actualOutput = transaction.getCredit();
		console.log(actualOutput);

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

})