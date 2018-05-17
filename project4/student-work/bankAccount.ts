import {Account} from "../common/interfaces/Account";
import {TransactionOrigin} from "../common/enums/TransactionOrigin";
import {Transaction} from "../common/interfaces/Transaction";

export class BankAccount implements Account{

    constructor(currentDate) {
        this.accountHistory = []; //from property below
        this.currentDate = currentDate; //from property below
    }

    //required properties from implementing Account:
    currentDate: Date;
    balance: number;
    accountHistory: Transaction[];
    accountHolderBirthDate: Date;

    //custom function used for calculating interest and to find out what day the interest should be calculated on
    interestCalculator(numDays: number, interestRate: number) {

        for(let i = 1; i <= numDays; i++) {

            this.currentDate.setDate(this.currentDate.getDate() + 1);

            if (this.currentDate.getDate() === 1) { //checks to see if it is the first of the month
                let myDeposit = (interestRate * this.balance) / 12;

                let myRoundedNumber = +myDeposit.toFixed(2); //toFixed is a javascript method that allows you to take a big
                // long decimal, and cut it down to two decimal places. Using as recommended by peeps on stack overflow
                // because i couldn't get math.floor to work.

                this.depositMoney(myRoundedNumber, "1st of month interest"); //uses deposit money function from above
            }
        }
    }

    //required function from implementing Account:
    withdrawMoney(amount: number,
                  description: string,
                  transactionOrigin: TransactionOrigin): Transaction {

        if(this.balance >= amount) {

            let transaction = {
                //using transaction interface properties:
                success: true,
                amount: -amount,
                resultBalance: this.balance = this.balance - amount,
                transactionDate: this.currentDate,
                description: `$${amount} withdrawn`,
                errorMessage: "",
                transactionOrigin: transactionOrigin
            };

            this.accountHistory.push(transaction); //putting transactions into the transaction array
            return transaction; //must return transaction because of Transaction type on this function
        }
        else if (this.balance < amount) {

            let transaction = {
                //using transaction interface properties:
                success: false,
                amount: -amount,
                resultBalance: this.balance,
                transactionDate: this.currentDate,
                description: description,
                errorMessage: "Attempting to remove more money than is available.",
                transactionOrigin: transactionOrigin
            };

            this.accountHistory.push(transaction); //putting transactions into the transaction array
            return transaction; //must return transaction because of Transaction type on this function
        }
    }

    //required function from implementing Account:
    depositMoney(amount: number,
                 description: string): Transaction {

        let transaction = {
            //using transaction interface properties:
            success: true,
            amount: amount,
            resultBalance: this.balance += amount,
            transactionDate: this.currentDate,
            description: description,
            errorMessage: ""
        };

        this.accountHistory.push(transaction); //putting transactions into the transaction array
        return transaction; //must return transaction because of Transaction type on this function
    }

    //required function from implementing Account:
    advanceDate(numberOfDays: number) {
        //not needed in the actual bank account class as it needs to be use separately in each separate type of account
    }
}