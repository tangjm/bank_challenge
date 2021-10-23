const BankAccount = require("./BankAccount");

class BankStatement {
	#header;
	#formattedTransactions;

	constructor() {
		this.#header = "date || credit || debit || balance";
		this.#formattedTransactions = [];
	}

	// Getters
	getHeader() {
		return this.#header;
	}

	getFormattedTransactions() {
		return this.#formattedTransactions;
	}

	// Methods
	format(transactionsArr = new BankAccount().getTransactions()) {
		for (let i = 0, j = transactionsArr.length; i < j; i++) {
			let formattedArr = [];
			transactionsArr[i].getType() === "deposit" ? formattedArr = this.depositFormat(transactionsArr[i]) :
				formattedArr = this.withdrawalFormat(transactionsArr[i]);
			this.#formattedTransactions.push(formattedArr.join(" || "));
		}
	}

	depositFormat(transactionObj) {
		let formattedArr = [];
		formattedArr[0] = this.dateFormat(transactionObj.getDate());
		formattedArr[1] = this.creditFormat(transactionObj.getCredit());
		formattedArr[2] = this.balanceFormat(transactionObj.getNewBalance());
		return formattedArr;
	}

	withdrawalFormat(transactionObj) {
		let formattedArr = [];
		formattedArr[0] = this.dateFormat(transactionObj.getDate());
		formattedArr[1] = this.debitFormat(transactionObj.getDebit());
		formattedArr[2] = this.balanceFormat(transactionObj.getNewBalance());
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
		let formattedDate = [dateObj.getDay(), dateObj.getMonth(), dateObj.getYear()];
		return formattedDate.join("/");
	}
}

module.exports = BankStatement;