const BankAccount = require("../src/BankAccount");
const BankStatement = require("../src/BankStatement");
const StatementPrinter = require("../src/StatementPrinter");
const Date = require("../src/Date");

describe("Test suite for Acceptance Criteria", () => {
	let expectedOutput1, expectedOutput2, expectedOutput3, expectedOutput4;

	it("Testing Acceptance Criteria", () => {
		let bankAccount = new BankAccount();
		let bankStatement = new BankStatement();
		let statementPrinter = new StatementPrinter();

		bankAccount.deposit(1000, new Date(10, 01, 2012));
		bankAccount.deposit(2000, new Date(13, 01, 2012));
		bankAccount.withdraw(500, new Date(14, 01, 2012));

		bankStatement.format(bankAccount.getTransactions());

		expectedOutput1 = `date || credit || debit || balance`;
		expectedOutput2 = `14/01/2012 || || 500.00 || 2500.00`;
		expectedOutput3 = `13/01/2012 || 2000.00 || || 3000.00`;
		expectedOutput4 = `10/01/2012 || 1000.00 || || 1000.00`;

		spyOn(console, "log");
		statementPrinter.print(bankStatement);

		expect(console.log.calls.allArgs()).toEqual([[expectedOutput1], [expectedOutput2], [expectedOutput3], [expectedOutput4]]);
	})
})