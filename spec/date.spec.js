const Date = require(`../src/Date`);

describe("Test suite for Date class", () => {
	let expectedOutput, actualOutput;
	let date;

	beforeEach(() => {
		date = new Date(20, 10, 2021);
	})

	afterEach(() => {
		date = null;
	})

	it("Test 1: Testing that user can create a date and specify the day", () => {
		// Arrange
		expectedOutput = 20;

		// Act
		actualOutput = date.getDay();

		// Assert
		expect(actualOutput).toEqual(expectedOutput);
	})

	it("Test 2: Testing that user can create a date and specify the month", () => {
		// Arrange
		expectedOutput = 10;

		// Act
		actualOutput = date.getMonth();

		// Assert
		expect(actualOutput).toEqual(expectedOutput);
	})

	it("Test 3: Testing that user can create a date and specify the year", () => {
		// Arrange
		expectedOutput = 2021;

		// Act
		actualOutput = date.getYear();

		// Assert
		expect(actualOutput).toEqual(expectedOutput);
	})



})