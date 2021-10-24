const BankAccount = require("../src/BankAccount");
const BankStatement = require("../src/BankStatement");
const StatementPrinter = require("../src/StatementPrinter");
const Date = require("../src/Date");


let bankAccount = new BankAccount();
let bankStatement = new BankStatement(bankAccount);
let statementPrinter = new StatementPrinter();

bankAccount.deposit(1000, new Date(10, 01, 2012));
bankAccount.deposit(2000, new Date(13, 01, 2012));
bankAccount.withdraw(500, new Date(14, 01, 2012));

bankStatement.format();
statementPrinter.print(bankStatement);