class StatementPrinter {
	print(bankStatement) {
		this.printHeader(bankStatement);
	}

	printHeader(bankStatement) {
		let header = bankStatement.getHeader();
		console.log(header);
	}
}

module.exports = StatementPrinter;