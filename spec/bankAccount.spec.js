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

	it("Test 1: Testing that user can deposit money", () => {
		// Arrange
		bankAccount.deposit(10);
		expectedOutput = 10;

		// Act
		actualOutput = bankAccount.getCredit();

		// Assert
		expect(actualOutput).toEqual(expectedOutput);
	})

	it("Test 2: Testing that user can withdraw money", () => {
		// Arrange
		bankAccount.withdraw(10);
		expectedOutput = -10;

		// Act
		actualOutput = bankAccount.getDebit();
		// Assert
		expect(actualOutput).toEqual(expectedOutput);
	})

	it("Test 3: Testing that balance responds correctly to reflect credit and debit changes", () => {
		// Arrange
		bankAccount.deposit(20);
		bankAccount.withdraw(10);
		expectedOutput = 10;

		// Act
		actualOutput = bankAccount.getBalance();

		// Assert
		expect(actualOutput).toEqual(expectedOutput);
	})

	it("Test 4: Testing that every deposit is recorded in transaction history", () => {
		// Arrange
		bankAccount.deposit(20);
		let input = new Transaction();

		// Act
		actualOutput = bankAccount.getTransactions();

		// Assert
		expect(actualOutput).toContain(input);
	})

	it("Test 5: Testing that every withdrawal is recorded in transaction history", () => {
		// Arrange
		bankAccount.withdraw(20);
		let input = new Transaction();

		// Act
		actualOutput = bankAccount.getTransactions();

		// Assert
		expect(actualOutput).toContain(input);
	})
})

describe("Test suite for transaction storage", () => {
	let expectedOutput, actualOutput;

	it("Test 6: Testing that transactions added to transaction history have a date", () => {
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
})


