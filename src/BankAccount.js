class BankAccount {
	credit;
	debit;
	balance;

	deposit(amount) {
		this.credit += amount;
		this.balance += amount;
	}

	withdraw(amount) {
		this.debit -= amount;
		this.balance -= amount;
	}
}

module.exports = BankAccount;