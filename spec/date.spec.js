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

	it("Test 1: User can specify the day", () => {
		expectedOutput = 20;
		actualOutput = date.getDay();
		expect(actualOutput).toEqual(expectedOutput);
	})

	it("Test 2: User can specify the month", () => {
		expectedOutput = 10;
		actualOutput = date.getMonth();
		expect(actualOutput).toEqual(expectedOutput);
	})

	it("Test 3: User can specify the year", () => {
		expectedOutput = 2021;
		actualOutput = date.getYear();
		expect(actualOutput).toEqual(expectedOutput);
	})
})