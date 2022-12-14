class BankStatement {
	#header;
	#formattedTransactions;
	#bankAccount;

	constructor(bankAccount) {
		this.#header = "date || credit || debit || balance";
		this.#formattedTransactions = [];
		this.#bankAccount = bankAccount;
	}

	// Getters
	getHeader() {
		return this.#header;
	}

	getFormattedTransactions() {
		return this.#formattedTransactions;
	}

	getBankAccount() {
		return this.#bankAccount;
	}

	// Methods
	format(transactionsArr = this.getBankAccount().getTransactions()) {
		for (let i = 0, j = transactionsArr.length; i < j; i++) {
			let formattedArr = [];
			transactionsArr[i].getType() === "deposit" ? formattedArr = this.depositFormat(transactionsArr[i]) :
				formattedArr = this.withdrawalFormat(transactionsArr[i]);
			this.#formattedTransactions.push(formattedArr.join(" || "));
		}
	}

	depositFormat(transactionObj) {
		let formattedArr = [
			this.dateFormat(transactionObj.getDate()),
			this.creditFormat(transactionObj.getCredit()),
			this.balanceFormat(transactionObj.getNewBalance())
		];
		return formattedArr;
	}

	withdrawalFormat(transactionObj) {
		let formattedArr = [
			this.dateFormat(transactionObj.getDate()),
			this.debitFormat(transactionObj.getDebit()),
			this.balanceFormat(transactionObj.getNewBalance())
		];
		return formattedArr;
	}

	balanceFormat(balance) {
		let formattedBalance = balance.toFixed(2);
		return formattedBalance;
	}

	creditFormat(amount) {
		let formattedAmount = amount.toFixed(2) + " ||";
		return formattedAmount;
	}

	debitFormat(amount) {
		let formattedAmount = "|| " + amount.toFixed(2);
		return formattedAmount;
	}

	dateFormat(dateObj) {
		let formattedDate = [
			this.dayFormat(dateObj),
			this.monthFormat(dateObj),
			this.yearFormat(dateObj)
		];
		return formattedDate.join("/");
	}

	dayFormat(dateObj) {
		let day = dateObj.getDay();
		if (day >= 1 && day <= 9) {
			return "0" + day.toString();
		}
		return day.toString();
	}

	monthFormat(dateObj) {
		let month = dateObj.getMonth();
		if (month >= 1 && month <= 9) {
			return "0" + month.toString();
		}
		return month.toString();
	}

	yearFormat(dateObj) {
		let year = dateObj.getYear();
		return year.toString();
	}
}

module.exports = BankStatement;