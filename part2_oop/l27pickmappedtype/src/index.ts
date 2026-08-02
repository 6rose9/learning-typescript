// Pick mapped types

// exe1 

type ProductType = {
    id: string;
    title: string;
    price: number;
}

type ProductTitleOnly = Pick<ProductType, "title">;

let book: ProductTitleOnly = {
    title: "Top Choice",
}

// Pick for function params

type EmployeeType = {
    id: number;
    name: string;
    position: string;
    salary: number;
}

type EmployeeInfo = Pick<EmployeeType, "name" | "position">;

let employeeone: EmployeeInfo = {
    name: "Daw Pwint",
    position: "CTO",
}

function getemployee(obj: EmployeeInfo) {
    console.log(`${obj.name} : ${obj.position}`);
}

getemployee(employeeone);