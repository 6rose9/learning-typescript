type ty1 = "Hey" extends string ? true : false; // true
type ty2 = "Hey" extends any ? true : false; // true
type ty3 = "Hey" extends number ? true : false; // false
type ty4 = "Hey" extends unknown ? true : false; // true
type ty5 = string extends "Hay" ? true : false; // false, parent doesn't extend child

type ty6 = 1500 extends string ? true : false; // false
type ty7 = 1500 extends any ? true : false; // true
type ty8 = 1500 extends number ? true : false; // true
type ty9 = 1500 extends unknown ? true : false; // true
type ty10 = number extends 1500 ? true : false; // false, parent doesn't extend child

type ty11 = number extends string ? true : false; // false, no relationship
type ty12 = string extends number ? true : false; // false, no relationship

// unknown check
type ty13 = string extends unknown ? true : false; // true
type ty14 = object extends unknown ? true : false; // true
type ty15 = null extends unknown ? true : false; // true
type ty16 = undefined extends unknown ? true : false; // true
type ty17 = never extends unknown ? true : false; // true
type ty18 = unknown extends number ? true : false; // false

// any check
type ty19 = number extends any ? true : false; // true, everything extends to any, top type
type ty20 = void extends any ? true : false; // true
type ty21 = object extends any ? true : false; // true
type ty22 = never extends any ? true : false; // true 

// boolean check
type ty23 = true extends boolean ? true : false; // true
type ty24 = number extends boolean ? true : false; // false, no relationship

// array check
type ty25 = string[] extends any ? true : false; // true
type ty26 = string[] extends any[] ? true : false; // true
type ty27 = string[] extends string ? true : false; // false

// union check
type ty28 = string extends (string | number) ? true : false; // true
type ty29 = (string | number) extends string ? true : false; // false ***

// Function check
type ty30 = void extends Function ? true : false; // true

// tuple check
type ty31 = [string, number] extends any[] ? true : false; // true

// never check
type ty32 = never extends string ? true : false; // true
type ty33 = never extends number ? true : false; // true

// Extract (Utality type)
type MixTypes = "Hay" | ["Boy", "Girl"] | 1500 | { brand: "Redbull", price: 0 } | [10, 20, 30] | { brand: "Sponer", price: number } | "Good Bye";

type Strings = Extract<MixTypes, string>; // "Hay" | "Good Bye"

type ProductOne = Extract<MixTypes, { brand: "Redbull", price: 0 }>; // { brand: "Redbull", price: 0 } 
type ProductTwo = Extract<MixTypes, { price: 0 }>; // Result: never
type ProductThree = Extract<MixTypes, { stock: 0 }>; // Result: never

type ArrayOne = Extract<MixTypes, []>; // Result: never
type ArrayTwo = Extract<MixTypes, number[]>; // [10, 20, 30]
type ArrayThree = Extract<MixTypes, string[]>; // ["Boy", "Girl"]
type ArrayFour = Extract<MixTypes, [unknown, unknown]>; // ["Boy", "Girl"] ***
type ArrayFive = Extract<MixTypes, [unknown, unknown, unknown]>; // [10, 20, 30] ***

// Exclude (Utality type)
type NotPrimitives = Exclude<MixTypes, string | number>; // ["Boy", "Girl"] | { brand: "Redbull", price: 0 } | [10, 20, 30] | { brand: "Sponer", price: number };
type NotArrays = Exclude<MixTypes, any[]>; // "Hay" | 1500 | { brand: "Redbull", price: 0 } | { brand: "Sponer", price: number } | "Good Bye";

type NotProductOne = Exclude<MixTypes, { brand: "Redbull", price: 0 }>; 
type NotProductTwo = Exclude<MixTypes, { price: 0 }>; 
type NotProductThree = Exclude<MixTypes, { stock: 0 }>; 

type NotArrayOne = Exclude<MixTypes, []>; 
type NotArrayTwo = Exclude<MixTypes, number[]>; 
type NotArrayThree = Exclude<MixTypes, string[]>; 
type NotArrayFour = Exclude<MixTypes, [unknown, unknown]>; 
type NotArrayFive = Exclude<MixTypes, [unknown, unknown, unknown]>; 