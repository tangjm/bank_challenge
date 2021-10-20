class BankAccount {
	credit;

	deposit(amount) {
		this.credit += amount;
	}
}

module.exports = BankAccount;