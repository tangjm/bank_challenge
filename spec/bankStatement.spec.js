const BankStatement = require("../src/BankStatement");

describe("Test suite for BankStatement class", () => {
	let expectedOutput, actualOutput;
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

describe("Edge Case Test Suite for BankStatement", () => {
	let expectedOutput, actualOutput;
	let bankStatement;
	let dateObj;

	beforeEach(() => {
		bankStatement = new BankStatement();
	})
	afterEach(() => {
		bankStatement = null;
	})

	it("Test 3: Dates with single digit days are formatted correctly", () => {
		dateObj = {
			day: 1,
			month: "",
			year: "",
			getDay() { return this.day },
			getMonth() { return this.month },
			getYear() { return this.year }
		}
		bankStatement.format([{
			getType() { return "deposit" },
			getDate() { return dateObj },
			getCredit() { return 10 },
			getDebit() { return 10 },
			getNewBalance() { return 10 }
		}]);
		expectedOutput = "01// || 10.00 || || 10.00";

		actualOutput = bankStatement.getFormattedTransactions()[0];

		expect(actualOutput).toEqual(expectedOutput);
	})

	it("Test 4: Dates with single digit months are formatted correctly", () => {
		dateObj = {
			day: "",
			month: 1,
			year: "",
			getDay() { return this.day },
			getMonth() { return this.month },
			getYear() { return this.year }
		}
		bankStatement.format([{
			getType() { return "deposit" },
			getDate() { return dateObj },
			getCredit() { return 10 },
			getDebit() { return 10 },
			getNewBalance() { return 10 }
		}]);
		expectedOutput = "/01/ || 10.00 || || 10.00";

		actualOutput = bankStatement.getFormattedTransactions()[0];

		expect(actualOutput).toEqual(expectedOutput);
	})

})