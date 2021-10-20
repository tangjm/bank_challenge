class Date {
	#day;
	#month;
	#year;

	// Setters and Getters
	getDay() {
		return this.#day;
	}

	setDay(day) {
		this.#day = day;
	}

	getMonth() {
		return this.#month;
	}

	setMonth(month) {
		this.#month = month;
	}

	getYear() {
		return this.#year;
	}

	setYear(year) {
		this.#year = year;
	}
}

module.exports = Date;