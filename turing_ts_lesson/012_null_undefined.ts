type NullableOrString = string | null | undefined; // primitive data types

let str: NullableOrString = "Hello";
str = null;
str = undefined;

let str2: string;
// str2 = undefined;
// str2 = null;

