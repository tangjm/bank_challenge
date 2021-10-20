class BankAccount {
	credit;
	debit;

	deposit(amount) {
		this.credit += amount;
	}

	withdraw(amount) {
		this.debit -= amount;
	}
}

module.exports = BankAccount;