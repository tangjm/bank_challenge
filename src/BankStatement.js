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
			if (transactionsArr[i].getType() === "deposit") {
				// transactionsArr[i] = {
				// 	dateObj, 
				// 	type,
				// 	amount,
				// 	newBalance
				// }
				// let formattedArr = [];
				// formattedArr[0] = date;
				// formattedArr[1] = amount to 2.d.p + " ||";
				// formattedArr[2] = newBalance to 2.d.p;

				formattedArr[0] = this.dateFormat(transactionsArr[i].getDate()); // dateObj

				formattedArr[1] = this.creditFormat(transactionsArr[i].getCredit()); // amount

				formattedArr[2] = this.balanceFormat(transactionsArr[i].getNewBalance()); // newBalance

			} else {
				formattedArr[0] = this.dateFormat(transactionsArr[i].getDate()); // dateObj

				formattedArr[1] = this.debitFormat(transactionsArr[i].getDebit()); // amount

				formattedArr[2] = this.balanceFormat(transactionsArr[i].getNewBalance()); // newBalance
			}
			this.#formattedTransactions.push(formattedArr.join(" || "));
		}
	}

	balanceFormat(balance) {
		let formattedBalance = balance.toFixed(2); // 2 d.p;
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
		let formattedDate = [dateObj.getDay(), dateObj.getMonth(), dateObj.getYear()].join("/");
		return formattedDate;
	}

	depositFormat(transactionObj) {
	}

	withdrawalFormat() {
	}
}

module.exports = BankStatement;