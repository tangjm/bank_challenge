const BankAccount = require("../src/BankAccount");
const BankStatement = require("../src/BankStatement");
const Date = require("../src/Date");
const StatementPrinter = require("../src/StatementPrinter");

describe("Test suite for StatementPrinter", () => {
	it("Test 1: Testing that we can print out the headers for the bank statement", () => {
		// Arrange
		let statementPrinter = new StatementPrinter();
		let bankAccount = new BankAccount();
		let date = new Date(10, 01, 2012);
		bankAccount.deposit(1000, date);
		let bankStatement = new BankStatement()
		bankStatement.format(bankAccount.getTransactions());

		// Act
		actualOutput = statementPrinter.printHeader(bankStatement);
		spyOn(bankStatement, "getHeader").and.returnValue("header");

		// Assert
		expect(console.log).toHaveBeenCalledWith("header");
	})
	// it("Test 1: Testing that the StatementPrinter is able to print out the entire recorded transaction history", () => {
	// 	// Arrange

	// 	// Act
	// 	// Assert

	// })
})