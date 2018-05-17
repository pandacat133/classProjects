import {BankAccount} from "./bankAccount";

export class CheckingAccount extends BankAccount {

    constructor(currentDate) {
        super(currentDate);
        this.balance = 1000;
    }

    advanceDate(days) {
        super.interestCalculator(days, .01);
    }
}