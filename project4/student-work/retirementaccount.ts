import {BankAccount} from "./bankAccount";
import {TransactionOrigin} from "../common/enums/TransactionOrigin";
import {Transaction} from "../common/interfaces/Transaction";

export class RetirementAccount extends BankAccount {

    constructor(currentDate, birthday) {
        super(currentDate);
        this.accountHolderBirthDate = birthday;
        this.balance = 100000;
    }

    advanceDate(days) { //originating from bank account class
        super.interestCalculator(days, .03); //calculating interest
    }

    withdrawMoney(amount: number,
                  description: string,
                  transactionOrigin: TransactionOrigin): Transaction { //originating from bank account class

        let retirementBirthday = new Date(1958, 5, 19); //creates a variable that stores the earliest date a person must
        // born be to be 60.

        if(retirementBirthday <= this.accountHolderBirthDate){
            amount = amount * 1.1;
        }

        let takeMyMoney = super.withdrawMoney(amount,description,transactionOrigin);
        return takeMyMoney;
    }
}