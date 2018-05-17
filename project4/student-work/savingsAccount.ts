import {BankAccount} from "./bankAccount";
import {TransactionOrigin} from "../common/enums/TransactionOrigin";
import {Transaction} from "../common/interfaces/Transaction";

export class SavingAccount extends BankAccount {
    constructor(currentDate) {
        super(currentDate);
        this.balance = 10000; //all savings accounts must have this much money to start out with
    }

    //initializing the number of withdrawals at 0 so the app can keep track of the withdrawal limit.
    withdrawals: number = 0;

    advanceDate(days: number) { //function from Bank Account class
        let getCurrentMonth = this.currentDate.getMonth(); //stores current month locally to compare in the future

        super.interestCalculator(days, .02); //figuring out interest

        if(getCurrentMonth !== this.currentDate.getMonth()){
            this.withdrawals = 0;
        }
    }

    withdrawMoney(amount: number,
                  description: string,
                  transactionOrigin: TransactionOrigin): Transaction { //function from Bank Account class

        //using Transaction Origin enum:
        if(transactionOrigin === 1 || transactionOrigin === 2) {
            this.withdrawals = this.withdrawals + 1;
        }

        if(this.withdrawals <= 6) {
            let takeMyMoney = super.withdrawMoney(amount,description,transactionOrigin);
            return takeMyMoney;
        }
        else {
            return {
                //using transaction interface properties:
                success: false,
                amount: -amount,
                resultBalance: this.balance,
                transactionDate: this.currentDate,
                description: description,
                errorMessage: "Only 6 withdrawals allowed per month",
                transactionOrigin: transactionOrigin
            }
        }
    }
}