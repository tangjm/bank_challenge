class StatementPrinter {
	print(bankStatement) {
		this.printHeader(bankStatement);
		this.printTransactions(bankStatement);
	}

	printHeader(bankStatement) {
		let header = bankStatement.getHeader();
		console.log(header);
	}

	printTransactions(bankStatement) {
		let transactionArr = bankStatement.getFormattedTransactions();
		transactionArr.reverse();
		transactionArr.forEach(formattedTransaction => this.printItem(formattedTransaction));
	}

	printItem(formattedTransaction) {
		console.log(formattedTransaction);
	}
}

module.exports = StatementPrinter;