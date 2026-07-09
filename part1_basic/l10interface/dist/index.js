"use strict";
// type 
function gettax() {
    if (this.tax) {
        return this.amount * this.tax;
    }
    return 0;
}
function randomUsage() {
    return Math.ceil(Math.random() * 100) * 1000;
}
let myWallet = {
    id: '0001',
    name: "Crystal",
    avatar: null,
    capital: 800000,
    status: "active",
    myhobbies: ["reading", "traveling", "gaming"],
    myplan: function () {
        return this.myhobbies?.map((hobby) => {
            const randomNum = randomUsage();
            return `I will spend ${randomNum} kyats for ${hobby}.`;
        }) || [];
    },
    transcation: [{
            id: '0001',
            account_id: '0001',
            type: 'deposit',
            amount: 100000,
            status: "success",
            date: new Date(),
            tax_amount: gettax,
        }, {
            id: '0002',
            account_id: '0001',
            type: 'withdraw',
            amount: 80000,
            status: "success",
            date: new Date(),
            tax: 0.3,
            tax_amount: gettax
        },
        {
            id: '0003',
            account_id: '0001',
            type: 'withdraw',
            amount: 30000,
            status: "failed",
            date: new Date(),
            tax: 0.2,
            tax_amount: gettax
        }]
};
const myCapital = (account) => {
    // calculate the capital of the account based on the transaction history as junior
    // let capital = account.capital;
    // account.transcation.forEach(transaction => {
    //     if (transaction.status === "success") {
    //         if (transaction.type === "deposit") {
    //             capital += transaction.amount + transaction.tax_amount();
    //         } else if (transaction.type === "withdraw") {
    //             capital -= transaction.amount + transaction.tax_amount();
    //             console.log(transaction.tax_amount());
    //         }
    //     }
    // });
    // return capital;
    // reduce method with ternary operator
    return account.transcation.reduce((acc, transaction) => {
        if (transaction.status === "success") {
            acc += transaction.type === "deposit" ?
                transaction.amount + transaction.tax_amount() :
                -(transaction.amount + transaction.tax_amount());
        }
        return acc;
    }, account.capital);
};
console.log(myCapital(myWallet));
console.log(myWallet.myplan?.());
