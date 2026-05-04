class BankAccount {
    constructor(ownerName, balance) {
        this.ownerName = ownerName;
        this.balance = balance;
    }

    depositAmount(amount) {
        if (amount > 0) {
            this.balance += amount;
        }
    }

    withdrawAmount(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
        } else {
            console.log("Invalid withdrawal attempt");
        }
    }

    getBalance() {
        return this.balance;
    }
}

function main() {
    const account = new BankAccount("Alice", 1000);
    account.depositAmount(500);
    account.withdrawAmount(200);
    account.withdrawAmount(2000);
    console.log(`Final Balance: ${account.getBalance()}`);
}

main();
