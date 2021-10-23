class StatementPrinter {
	print(bankStatement) {
		this.printHeader(bankStatement);
	}

	printHeader(bankStatement) {
		let header = bankStatement.getHeader();
		console.log(header);
	}

	printEachItem(bankStatement) {
		let formattedTransactionArr = bankStatement.getFormattedTransactions();
		formattedTransactionArr.forEach(transaction => console.log(transaction));
	}
}

module.exports = StatementPrinter;