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