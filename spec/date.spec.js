const Date = require(`../src/Date`);

describe("Test suite for Date class", () => {
	let expectedOutput, actualOutput;
	let date;

	beforeEach(() => {
		date = new Date();
	})

	afterEach(() => {
		date = null;
	})

	it("Test 1: Testing that we can create a date and specify the day", () => {
		// Arrange
		date.setDay(20);
		expectedOutput = 20;

		// Act
		actualOutput = date.getDay();

		// Assert
		expect(actualOutput).toEqual(expectedOutput);
	})

	it("Test 2: Testing that we can create a date and specify the month", () => {
		// Arrange
		date.setMonth(10);
		expectedOutput = 10;

		// Act
		actualOutput = date.getMonth();

		// Assert
		expect(actualOutput).toEqual(expectedOutput);
	})

	it("Test 3: Testing that we can create a date and specify the year", () => {
		// Arrange
		date.setYear(2021);
		expectedOutput = 2021;

		// Act
		actualOutput = date.getYear();

		// Assert
		expect(actualOutput).toEqual(expectedOutput);
	})

})