const BankAccount = require(`../src/BankAccount`);

describe("Test suite for BankAccount class", () => {
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
		bankAccount.credit = 0;
		expectedOutput = 10;

		// Act
		bankAccount.deposit(10);
		actualOutput = bankAccount.credit;
		// Assert
		expect(actualOutput).toEqual(expectedOutput);
	})

	it("Test 2: Testing that user can withdraw money", () => {
		// Arrange
		bankAccount.debit = 10;
		expectedOutput = 0;

		// Act
		bankAccount.withdraw(10);
		actualOutput = bankAccount.debit;
		// Assert
		expect(actualOutput).toEqual(expectedOutput);
	})

	it("Test 3: Testing that balance responds correctly to reflect credit and debit changes", () => {
		// Arrange
		bankAccount.balance = 0;
		expectedOutput = 10;

		// Act
		bankAccount.deposit(20);
		bankAccount.withdraw(10);
		actualOutput = bankAccount.balance;

		// Assert
		expect(actualOutput).toEqual(expectedOutput);
	})
})