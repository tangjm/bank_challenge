const BankAccount = require("../src/BankAccount");
const BankStatement = require("../src/BankStatement");
const Date = require(`../src/Date`);

describe("Test suite for BankStatement class", () => {
	it("Test 1: Testing that BankStatement formats the transaction history", () => {
		// Arrange
		let bankAccount = new BankAccount();
		let bankStatement = new BankStatement();
		let dateObj = new Date(10, 10, 2021);
		bankAccount.deposit(10, dateObj);

		expectedOutput = "date || credit || debit || balance";
		// Act
		actualOutput = bankStatement.getHeading();

		// Assert
		expect(actualOutput).toEqual(expectedOutput);
	})
})

