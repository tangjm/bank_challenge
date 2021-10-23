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
		let formattedTransactionArr = bankStatement.getFormattedTransactions()
		formattedTransactionArr.reverse();
		formattedTransactionArr.forEach(formattedTransaction => this.printItem(formattedTransaction));
	}
	printItem(formattedTransaction) {
		console.log(formattedTransaction);
	}
}

module.exports = StatementPrinter;