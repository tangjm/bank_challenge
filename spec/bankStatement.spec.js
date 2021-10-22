const BankAccount = require("../src/BankAccount");
const BankStatement = require("../src/BankStatement");
const Date = require(`../src/Date`);

describe("Test suite for BankStatement class", () => {
	it("Test 1: Testing that BankStatement formats the statement header", () => {
		// Arrange
		let bankAccount = new BankAccount();
		let bankStatement = new BankStatement();
		let dateObj = new Date(10, 10, 2021);
		bankAccount.deposit(10, dateObj);

		expectedOutput = "date || credit || debit || balance";
		// Act
		actualOutput = bankStatement.getHeader();

		// Assert
		expect(actualOutput).toEqual(expectedOutput);
	})

	it("Test 2: Testing that each recorded deposit transaction is properly formatted", () => {
		// Arrange
		let bankAccount = new BankAccount();
		let bankStatement = new BankStatement();
		let dateObj = new Date(10, 10, 2021);
		bankAccount.deposit(10, dateObj);
		expectedOutput = "10/10/2021 || 10.00 || || 10.00";

		// Act
		bankStatement.format(bankAccount.getTransactions());
		actualOutput = bankStatement.getFormattedTransactions()[0];

		// Assert
		expect(actualOutput).toEqual(expectedOutput);
	})

	it("Test 2b: Testing that each recorded withdrawal transaction is properly formatted", () => {
		// Arrange
		let bankAccount = new BankAccount();
		let bankStatement = new BankStatement();
		let dateObj = new Date(10, 10, 2021);
		bankAccount.withdraw(10, dateObj);
		expectedOutput = "10/10/2021 || || 10.00 || 10.00";

		// Act
		bankStatement.format(bankAccount.getTransactions());
		actualOutput = bankStatement.getFormattedTransactions()[0];

		// Assert
		expect(actualOutput).toEqual(expectedOutput);
	})


})

