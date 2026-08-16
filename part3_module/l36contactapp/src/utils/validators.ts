export const regexObj = {
    name: /^[a-zA-Z ]{3,30}$/, // only letters & spaces, 3 to 30 chars
    email: /^[\w.]+@[a-z]+\.[a-zA-Z]{2,}$/, // email pattern \w = a-zA-Z0-9_
    phone: /^\d{11}$/ // 11 digit
}

// method 1
export function validateField(field: string, value: string): boolean {

    // type error bcz typescript known as index type with RegExp, not as string
    // const pattern = regexObj[field]; *** type 'string' can't be used to index type '{ name: RegExp; email: RegExp; phone: RegExp; }'.

    const pattern = (regexObj as any)[field];
    if (!pattern) true;

    return pattern.test(value);
}

// method 2
// type Field = keyof typeof regexObj; // "name" | "email" | "age"
// export function validateField(field: Field, value: string): boolean {
//     const pattern = regexObj[field];
//     if (!pattern) true;
//     return pattern.test(value);
// }
