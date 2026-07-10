// type 

type status = "success" | "failed" | "pending";

type name = string;

type tax = 0.1 | 0.2 | 0.3 | 0.4 | 0.5;

type transaction_type = "deposit" | "withdraw" | "transfer";

// ----------------------------------- interface & extends -----------------------------------

interface user extends profile {
    id: string | number | null;
    name: name;
}

interface profile {
    user_id?: string | number | null;
    avatar: File | string | null;
}

interface account extends user {
    capital: number;
    transcation: history[];
    status: "active" | "inactive" | "suspended";
    myhobbies?: string[];
    myplan?: () => string[];
}

interface history {
    id: string | number | null;
    account_id: string | number | null;
    type: transaction_type;
    amount: number;
    tax?: tax;
    status: status;
    date: Date;
    tax_amount: () => number;
}

function gettax(this: history): number {
    if (this.tax) {
        return this.amount * this.tax;
    }
    return 0;
}

function randomUsage() {
    return Math.ceil(Math.random() * 100) * 1000;
}

let myWallet: account = {
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
}

const myCapital = (account: account) => {

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

}

console.log(myCapital(myWallet));
console.log(myWallet.myplan?.());

// ----------------------------------- interface methods -----------------------------------

interface Applicate{
    id: string;
    name: string;
    position?: string;
    skills: string[];
    getskills(): string[];
    getoffer: () => boolean;
}

let employee: Applicate = {
    id: '0001',
    name: 'Crystal',
    position: 'Software Engineer',
    skills: ['laravel', 'react', 'typescript'],
    getskills: function () {
        return this.skills;
    },
    getoffer: () => {
        return Math.random() > 0.5;
    }   
}

console.log(employee.getoffer());

// ----------------------------------- interface arguments -----------------------------------

// duplicate type is not allowed in the same scope

// type calculator = (a: number, b: number) => number;
// type calculator = (a: number, b: number) => number;

interface Product{
    brand: string;
    price: number;
}

interface Product{
    packing: string;
    stock: number;
    price: number; // can contain again but must be the same data type
}

const productinfo: Product = {
    brand: "Redbull",
    price: 2000,
    packing: "can",
    stock: 100
}

console.log(productinfo);