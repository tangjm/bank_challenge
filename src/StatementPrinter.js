class StatementPrinter {
	print(bankStatement) {
		this.printHeader(bankStatement);
	}

	printHeader(bankStatement) {
		let header = bankStatement.getHeader();
		console.log(header);
	}

	// printEachItem(bankStatement) {
	// 	let formattedTransactionArr = bankStatement.getFormattedTransactions();
	// 	formattedTransactionArr.forEach(transaction => console.log(transaction));
	// }
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