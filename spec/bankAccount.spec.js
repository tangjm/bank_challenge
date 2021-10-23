const BankAccount = require(`../src/BankAccount`);
const Transaction = require(`../src/Transaction`);
const Date = require(`../src/Date`);


describe("Test suite for despositing and withdrawing money", () => {
	let expectedOutput, actualOutput;
	let bankAccount;

	beforeEach(() => {
		bankAccount = new BankAccount();
	})

	afterEach(() => {
		bankAccount = null;
	})

	it("Test 1: User can deposit money", () => {
		bankAccount.deposit(10);
		expectedOutput = 10;

		actualOutput = bankAccount.getBalance();

		expect(actualOutput).toEqual(expectedOutput);
	})

	it("Test 2: User can withdraw money", () => {
		bankAccount.withdraw(10);
		expectedOutput = -10;

		actualOutput = bankAccount.getBalance();

		expect(actualOutput).toEqual(expectedOutput);
	})

	it("Test 3: Account balance correctly reflects credit and debit changes", () => {
		bankAccount.deposit(20);
		bankAccount.withdraw(10);
		expectedOutput = 10;

		actualOutput = bankAccount.getBalance();

		expect(actualOutput).toEqual(expectedOutput);
	})
})

describe("Test suite for transaction storage", () => {
	let expectedOutput, actualOutput;
	it("Test 4: All transactions are recorded", () => {
		bankAccount.withdraw(20);
		expectedOutput = 1;

		actualOutput = bankAccount.getTransactions().length;

		expect(actualOutput).toEqual(expectedOutput);
	})

	it("Test 5a: Deposit transactions are recorded with a date", () => {
		// Arrange
		let bankAccount = new BankAccount();
		let dateObj = new Date(10, 1, 2012);
		expectedOutput = dateObj;

		// Act
		bankAccount.deposit(10, dateObj);
		actualOutput = bankAccount.getTransactions()[0].getDate();

		// Assert
		expect(actualOutput).toEqual(expectedOutput);
	})

	it("Test 5b: Withdrawal transactions are recorded with a date", () => {
		// Arrange
		let bankAccount = new BankAccount();
		let dateObj = new Date(10, 1, 2012);
		expectedOutput = dateObj;

		// Act
		bankAccount.withdraw(10, dateObj);
		actualOutput = bankAccount.getTransactions()[0].getDate();

		// Assert
		expect(actualOutput).toEqual(expectedOutput);
	})

	it("Test 6a: Deposit transactions are recorded with the correct type", () => {
		// Arrange
		let bankAccount = new BankAccount();
		let dateObj = new Date(10, 1, 2012);
		bankAccount.deposit(10, dateObj);
		expectedOutput = "deposit";

		// Act
		// We spyOn the transactionObj's constructor
		actualOutput = bankAccount.getTransactions()[0].getType();

		// Assert
		expect(actualOutput).toEqual(expectedOutput);
	})

	it("Test 6b: Withdrawal transactions are recorded with the correct type", () => {
		// Arrange
		let bankAccount = new BankAccount();
		let dateObj = new Date(10, 1, 2012);
		bankAccount.withdraw(10, dateObj);
		expectedOutput = "withdrawal";

		// Act
		actualOutput = bankAccount.getTransactions()[0].getType();

		// Assert
		expect(actualOutput).toEqual(expectedOutput);
	})

	it("Test 7a: Deposit transactions are recorded with correct deposit amount", () => {
		// Arrange
		let bankAccount = new BankAccount();
		let dateObj = new Date(10, 1, 2012);
		bankAccount.deposit(10, dateObj);
		expectedOutput = 10;

		// Act
		actualOutput = bankAccount.getTransactions()[0].getCredit();

		// Assert
		expect(actualOutput).toEqual(expectedOutput);
	})

	it("Test 7b: Withdrawal transactions are recorded with correct withdrawal amount", () => {
		// Arrange
		let bankAccount = new BankAccount();
		let dateObj = new Date(10, 1, 2012);
		bankAccount.withdraw(10, dateObj);
		expectedOutput = 10;

		// Act
		actualOutput = bankAccount.getTransactions()[0].getDebit();

		// Assert
		expect(actualOutput).toEqual(expectedOutput);
	})
})


