class Date {
	#day;
	#month;
	#year;

	constructor(day, month, year) {
		this.#day = day;
		this.#month = month;
		this.#year = year;
	}

	// Getters
	getDay() {
		return this.#day;
	}

	getMonth() {
		return this.#month;
	}

	getYear() {
		return this.#year;
	}
}

module.exports = Date;