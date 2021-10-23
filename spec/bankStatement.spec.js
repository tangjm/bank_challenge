const BankStatement = require("../src/BankStatement");

describe("Test suite for BankStatement class", () => {
	let bankStatement;
	let dateObj, transactionObj;

	beforeEach(() => {
		bankStatement = new BankStatement();
		dateObj = {
			day: 10,
			month: 10,
			year: 2021,
			getDay() { return this.day },
			getMonth() { return this.month },
			getYear() { return this.year }
		}
	})

	afterEach(() => {
		bankStatement = null;
		dateObj = null;
	})

	it("Test 1: BankStatement correctly formats statement header", () => {
		expectedOutput = "date || credit || debit || balance";
		actualOutput = bankStatement.getHeader();

		expect(actualOutput).toEqual(expectedOutput);
	})

	it("Test 2a: Each recorded deposit transaction is correctly formatted", () => {
		transactionObj = {
			getType() { return "deposit" },
			getDate() { return dateObj },
			getCredit() { return 10 },
			getDebit() { return 10 },
			getNewBalance() { return 10 }
		}
		expectedOutput = "10/10/2021 || 10.00 || || 10.00";
		bankStatement.format([transactionObj]);

		actualOutput = bankStatement.getFormattedTransactions()[0];

		expect(actualOutput).toEqual(expectedOutput);
	})

	it("Test 2b: Each recorded withdrawal transaction is properly formatted", () => {
		bankStatement.format([{
			getType() { return "" },
			getDate() { return dateObj },
			getCredit() { return 10 },
			getDebit() { return 10 },
			getNewBalance() { return -10 }
		}]);
		expectedOutput = "10/10/2021 || || 10.00 || -10.00";

		actualOutput = bankStatement.getFormattedTransactions()[0];

		expect(actualOutput).toEqual(expectedOutput);
	})
})

