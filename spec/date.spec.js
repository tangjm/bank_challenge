const Date = require(`../src/Date`);

describe("Test suite for Date class", () => {
	let expectedOutput, actualOutput;

	beforeEach(() => {

	})

	afterEach(() => {

	})

	it("Test 1: Testing that we can create a date and specify the day", () => {
		// Arrange
		const date = new Date();
		date.setDay(20);
		expectedOutput = 20;

		// Act
		actualOutput = date.getDay();

		// Assert
		expect(actualOutput).toEqual(expectedOutput);
	})

})