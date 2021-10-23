const BankAccount = require(`../src/BankAccount`);

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
	let bankAccount, dateObj;

	beforeEach(() => {
		bankAccount = new BankAccount();
		dateObj = {};
	})

	afterEach(() => {
		bankAccount = null;
		dateObj = null;
	})

	it("Test 4: All transactions are recorded", () => {
		bankAccount.withdraw(20);
		expectedOutput = 1;

		actualOutput = bankAccount.getTransactions().length;

		expect(actualOutput).toEqual(expectedOutput);
	})

	it("Test 5a: Deposit transactions are recorded with a date", () => {
		bankAccount.deposit(10, dateObj);
		expectedOutput = dateObj;

		actualOutput = bankAccount.getTransactions()[0].getDate();

		expect(actualOutput).toEqual(expectedOutput);
	})

	it("Test 5b: Withdrawal transactions are recorded with a date", () => {
		bankAccount.withdraw(10, dateObj);
		expectedOutput = dateObj;

		actualOutput = bankAccount.getTransactions()[0].getDate();

		expect(actualOutput).toEqual(expectedOutput);
	})

	it("Test 6a: Deposit transactions are recorded with the correct type", () => {
		bankAccount.deposit(10, dateObj);
		expectedOutput = "deposit";

		actualOutput = bankAccount.getTransactions()[0].getType();

		expect(actualOutput).toEqual(expectedOutput);
	})

	it("Test 6b: Withdrawal transactions are recorded with the correct type", () => {
		bankAccount.withdraw(10, dateObj);
		expectedOutput = "withdrawal";

		actualOutput = bankAccount.getTransactions()[0].getType();

		expect(actualOutput).toEqual(expectedOutput);
	})

	it("Test 7a: Deposit transactions are recorded with correct deposit amount", () => {
		bankAccount.deposit(10, dateObj);
		expectedOutput = 10;

		actualOutput = bankAccount.getTransactions()[0].getCredit();

		expect(actualOutput).toEqual(expectedOutput);
	})

	it("Test 7b: Withdrawal transactions are recorded with correct withdrawal amount", () => {
		bankAccount.withdraw(10, dateObj);
		expectedOutput = 10;

		actualOutput = bankAccount.getTransactions()[0].getDebit();

		expect(actualOutput).toEqual(expectedOutput);
	})
})


