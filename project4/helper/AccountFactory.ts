import {Account} from "../common/interfaces/Account";
import {RetirementAccount} from "../student-work/retirementaccount";
import {SavingAccount} from "../student-work/savingsAccount";
import {CheckingAccount} from "../student-work/checkingAccount";

export class AccountFactory {

    static getCheckingAccountObject(currentDate: Date): Account {
        return new CheckingAccount(currentDate);
    }

    static getSavingsAccountObject(currentDate: Date): Account {
        return new SavingAccount(currentDate);
    }

    static getRetirementAccountObject(currentDate: Date, accountHolderBirthDate: Date): Account {
        return new RetirementAccount(currentDate, accountHolderBirthDate);
    }

}
