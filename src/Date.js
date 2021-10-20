class Date {
	#day

	getDay() {
		return this.#day;
	}

	setDay(day) {
		this.#day = day;
	}
}

module.exports = Date;