### **Instructions**
------------------------
### **My approach**
------------------------
First read through the instructions to understand the requirements and criteria.

Created my own user stories and a provisional domain model.

### **Domain Models**
------------------------
| Object          | Property           | Method                           | Output                       |
| --------------- | ------------------ | -------------------------------- | ---------------------------- |
| `BankAccount`   | `balance@Number`   | `deposit(@Num)`                  | `'Deposited $X on DATE'@Str` |
|                 | `credit@Num`       | `withdraw(@Num)`                 | `'Withdrawn $X on DATE'@Str` |
|                 | `debit@Num`        | `createStatement()`              | `@BankStatement`             |
|                 | `transactions@Arr` |                                  |                              |
| `Transaction`   | `amount@Num`       |                                  |                              |
|                 | `date@Date`        | `getDate(@Date)`                 | `@Arr`                       |
| `Date`          | `day@Num`          |                                  |                              |
|                 | `month@Num`        |                                  |                              |
|                 | `year@Num`         |                                  |                              |
| `BankStatement` |                    | `printStatement(@BankStatement)` | `@Str`                       |


### **Examples of interactions**
------------------------