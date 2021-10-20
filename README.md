### **Instructions**
------------------------
### **My approach**
------------------------
First read through the instructions to understand the requirements and criteria.

Created my own user stories and a provisional domain model.

### **User Stories**
------------------------
1. As a customer, in order to keep my money safe, I want to be able to deposit and withdraw money.
2. As a customer, in order to keep frequent tabs on my spending, I want to be able to view my bank statement.

### **Domain Models**
------------------------
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


### **Examples of interactions**
------------------------