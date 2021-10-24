## Instructions
### Installation guide
1. Fork this repo and clone your forked version to your local machine.
2. Navigate to your cloned repo on your local machine and type `npm install` in the terminal to install the required dependencies.

### Running tests
- Use `npm test` in the terminal to run the test suites.
- To skip tests, prefix `describe` and `it` functions of files within the `spec` folder with an `x`. E.g. change `describe` to `xdescribe` and `it` to `xit`.
- Run `node index.js` to try out the actual program.

## My approach
### Planning stage
- I first read through the instructions to understand the requirements and criteria.
- I focused on creating an accurate domain model and worked on understanding how the various classes should interact with each other. To help with this, I wrote my own user stories and came up with a provisional domain model.

### Design and development stage
- I first worked on implementing the domain model, beginning with the basic 'deposit' and 'withdraw' functionality. 
- Then I worked on the printing aspect of the challenge.
- Finally, I refactored and decoupled my code.

### Reflections
My first roadblock was trying to implement the idea that each time a user makes a deposit or withdrawal, a corresponding transaction is generated and added to their transaction history. 

The `deposit()` and `withdraw()` methods would have to change the bank account balance property and also create a transaction object with the relevant transaction data. So in terms of classes, whenever the `deposit()` or `withdraw()` function is called, an instance of the Transaction class needs to be created, but that instance would need to receive the transaction data created after the `deposit()` or `withdraw()` function is called as arguments of its constructor. This is so that each transaction object is tied to a particular deposit or withdrawal. This meant that the `BankAccount`'s `deposit()` and `withdraw()` methods depend on the `Transaction` class and the `Transaction` class also depends on the `BankAccount` class insofar as it needs data produced by the `deposit()` and `withdraw()` methods of the `BankAccount` class.

To resolve this, I added a variable inside the `deposit()` method which would store the transaction data each time it was called, and it would call a `createTransaction()` function which
 which would take an instance of the Transaction class as an input, and that instance would be created with the variable storing the transaction data as the arguments of its constructor. Finally, our `deposit()` method would call an `addTransaction()` function which would add that newly created transaction instance to a transaction history array of our bank account. The same applies mutatis mutandis for the `withdraw()` method.

A second roadblock was trying to get my bank statment class to interact with my bank account class correctly. Initially, I tried decoupling any dependency on the bank account class by passing in the transactions array of an instance of the bank account class as an argument of the `format` method of the bank statement class like this:

```
let bankStatement = new BankStatement();

bankStatement.format(transactionsArr = new BankAccount().getTransactions());
```

Then I moved the dependency into the bank statement class constructor and used an interface instead. But as a compromise, I had to use more memory because I had to store the bank account object passed into the constructor in an instance field of my bank statement. Then I had access this instance field and access the transactions array stored in an instance field of this instance field whenever I called the `format` method.

```
let bankStatement = new BankStatement(bankAccount);

bankStatement.format(transactionsArr = this.getBankAccount().getTransactions());
```

### Other problems

 Another challenge was trying to write tests that required fetching properties from encapsulated test doubles. This meant I had to create getters for most of my classes. I also had to create an unencapsulated date object for my bankStatement.spec.js file in order to decouple the tests without having to write a test class that was indentical to my Date class. 

Another issue I had was understanding how the Jasmine spyOn function worked. I researched this further and figured out how this worked with other matchers besides `toHaveBeenCalledWith()`. In particular, in testing my statement printer, I wanted to test whether bank transactions are printed in reverse chronological order. This required me to spy on the order in which `console.log` printed out transactions. 

Moreover, I found the spyOn function useful for testing that the bank statement headers are printed before the transactions. As the spyOn function enabled me to spy on two different methods of the same object and use the `toHaveBeenCalledBefore()` matcher to test the order in which the methods were called.


### User Stories
1. **As** a customer, **in order to** keep my money safe, **I want to** be able to deposit and withdraw money.
2. **As** a customer, **in order to** keep frequent tabs on my spending, **I want to** be able to view my bank statement.

### Domain Models
**Initial Domain Model**

| Object          | Property           | Method                           | Output                                       |
| --------------- | ------------------ | -------------------------------- | -------------------------------------------- |
| `BankAccount`   | `balance@Number`   | `deposit(@Num)`                  | `'Deposited ${@Num} amount on ${@Date}'@Str` |
|                 | `credit@Num`       | `withdraw(@Num)`                 | `'Withdrawn ${@Num} amount on ${@Date}'@Str` |
|                 | `debit@Num`        | `createStatement()`              | `@BankStatement`                             |
|                 | `transactions@Arr` |                                  |                                              |
| `Transaction`   | `amount@Num`       |                                  |                                              |
|                 | `date@Date`        | `getDate(@Date)`                 | `@Arr`                                       |
| `Date`          | `day@Num`          |                                  |                                              |
|                 | `month@Num`        |                                  |                                              |
|                 | `year@Num`         |                                  |                                              |
| `BankStatement` |                    | `printStatement(@BankStatement)` | `@Str`                                       |

**Final Domain Model**

| Object             | Property                    | Method                              | Output         |
| ------------------ | --------------------------- | ----------------------------------- | -------------- |
| `BankAccount`      | `balance@Number`            | `deposit(@Num, @Date)`              |                |
|                    | `credit@Num`                | `withdraw(@Num, @Date)`             |                |
|                    | `debit@Num`                 |                                     |                |
|                    | `transactions@Arr`          | `getTransactions()`                 |                |
|                    | `transactionData@Arr`       | `getBalance()`                      |                |
|                    |                             | `createTransaction(@Transaction)`   | `@Transaction` |
|                    |                             | `addTransaction(@Transaction)`      |                |
| `Transaction`      | `credit@Num`                | `getCredit()`                       | `@Num`         |
|                    | `debit@Num`                 | `getDebit()`                        | `@Num`         |
|                    | `newBalance@Num`            | `getNewBalance()`                   | `@Num`         |
|                    | `type@Str`                  | `getType()`                         | `@Str`         |
|                    | `date@Date`                 | `getDate()`                         | `@Date`        |
| `Date`             | `day@Num`                   | `getDay()`                          | `@Num`         |
|                    | `month@Num`                 | `getMonth()`                        | `@Num`         |
|                    | `year@Num`                  | `getYear()`                         | `@Num`         |
| `BankStatement`    | `header@Str`                | `getHeader()`                       | `@Str`         |
|                    | `formattedTransactions@Arr` | `getFormattedTransactions()`        | `@Arr`         |
|                    | `bankAccount@BankAccount`   | `getBankAccount()`                  | `@BankAccount` |
|                    |                             | `format()`                          |                |
|                    |                             | `depositFormat()`                   | `@Arr`         |
|                    |                             | `withdrawalFormat()`                | `@Arr`         |
|                    |                             | `balanceFormat()`                   | `@Num`         |
|                    |                             | `creditFormat()`                    | `@Num`         |
|                    |                             | `debitFormat()`                     | `@Num`         |
|                    |                             | `dateFormat()`                      | `@Str`         |
|                    |                             | `dayFormat()`                       | `@Str`         |
|                    |                             | `monthFormat()`                     | `@Str`         |
|                    |                             | `yearFormat()`                      | `@Str`         |
| `StatementPrinter` |                             | `print(@BankStatement)`             |                |
|                    |                             | `printHeader(@BankStatement)`       |                |
|                    |                             | `printTransactions(@BankStatement)` |                |
|                    |                             | `printItem(@Str)`                   |                |

## Examples of interactions
![alt text](writingREADME.png)