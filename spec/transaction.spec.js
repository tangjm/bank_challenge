const Transaction = require(`../src/Transaction`);

// class TestBankAccount {
// 	deposit(amount) {

// 	};
// }

describe("Test suite for Transaction class", () => {
	it("Test 1 : Testing that transactions can keep track of deposits/withdrawals", () => {
		// Arrange
		// let transaction = new Transaction(dateArray, depositAmount/withdrawAmount, newBalance);
		let transaction = new Transaction([], 10, 10);
		expectedOutput = 10;

		// Act
		actualOutput = transaction.getCredit();
		console.log(actualOutput);

		// Assert
		expect(actualOutput).toEqual(expectedOutput);

	})
})