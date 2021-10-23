const BankAccount = require("../src/BankAccount");
const BankStatement = require("../src/BankStatement");
const StatementPrinter = require("../src/StatementPrinter");
const Date = require("../src/Date");

describe("Test suite for Acceptance Criteria", () => {
	let expectedOutput1, expectedOutput2, expectedOutput3, expectedOutput4;

	it("Testing Acceptance Criteria", () => {
		// Arrange
		let bankAccount = new BankAccount();
		let bankStatement = new BankStatement();
		let statementPrinter = new StatementPrinter();
		let date1 = new Date(10, 01, 2012);
		let date2 = new Date(13, 01, 2012);
		let date3 = new Date(14, 01, 2012);

		bankAccount.deposit(1000, date1);
		bankAccount.deposit(2000, date2);
		bankAccount.withdraw(500, date3);

		bankStatement.format(bankAccount.getTransactions());

		expectedOutput1 = `date || credit || debit || balance`;
		expectedOutput2 = `14/01/2012 || || 500.00 || 2500.00`;
		expectedOutput3 = `13/01/2012 || 2000.00 || || 3000.00`
		expectedOutput4 = `10/01/2012 || 1000.00 || || 1000.00`;

		// Act
		spyOn(console, "log");
		statementPrinter.print(bankStatement);


		// Assert
		expect(console.log.calls.allArgs()).toEqual([[expectedOutput1], [expectedOutput2], [expectedOutput3], [expectedOutput4]]);
	})
})