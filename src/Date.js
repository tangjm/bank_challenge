class Date {
	#day;
	#month;

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

}

module.exports = Date;