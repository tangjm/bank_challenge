const BankAccount = require(`../src/BankAccount`);

describe("Test suite for BankAccount class", () => {
	it("Test 1: Testing that user can deposit money", () => {
		// Arrange
		let bankAccount = new BankAccount();
		bankAccount.credit = 0;
		let expectedOutput = 10;

		// Act
		bankAccount.deposit(10);
		let actualOutput = bankAccount.credit;
		// Assert
		expect(actualOutput).toEqual(expectedOutput);
	})

	it("Test 2: TEsting that user can withdraw money", () => {
		// Arrange
		let bankAccount = new BankAccount();
		bankAccount.debit = 10;
		let expectedOutput = 0;

		// Act
		bankAccount.withdraw(10);
		let actualOutput = bankAccount.debit;
		// Assert
		expect(actualOutput).toEqual(expectedOutput);
	})

})