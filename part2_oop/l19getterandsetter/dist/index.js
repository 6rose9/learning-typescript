"use strict";
//Modifier            Main Class          SubClass            Outside
// public              yes                 yes                 yes
// protected           yes                 yes                 no
// private             yes                  no                 no
// Syntax 
// class ClassName {
//     private _property: type;
//     get propertyName(): type {
//         return this._property;
//     }
//     set propertyName(value: type) {
//         this._property = value;
//     }
// }
class People {
    _name;
    constructor(n) {
        this._name = n;
    }
    get name() {
        return this._name;
    }
    set name(newvalue) {
        if (newvalue.length > 3) {
            this._name = newvalue;
        }
        else {
            console.warn("name must be at least 3 characters");
        }
    }
}
class Developer extends People {
    developername;
    _skills;
    constructor(developername, ...arrs) {
        super(developername);
        this.developername = developername;
        this._skills = arrs;
    }
    get skills() {
        return this._skills;
    }
    set skills(newSkills) {
        if (newSkills.length > 0) {
            this._skills = newSkills;
        }
        else {
            console.warn("Developer must have at least one skill");
        }
    }
    getinfo() {
        console.log(`Developer: ${this.developername}`);
        console.log(`Skills: ${this._skills.join(", ")}`);
    }
}
let backendDev = new Developer("Crystal", "Laravel", "Express", "MySQL", "MongoDB");
backendDev.getinfo();
// Developer: Crystal
// Skills: Laravel, Express, MySQL, MongoDB
backendDev.developername = "Zin Zin";
backendDev.getinfo();
// Name: Zin Zin
// Skills: Laravel, Express, MySQL, MongoDB
let people = new People("Zin Zin Thin");
console.log(people.name); // name is getter method
// people._name = "zztz";  Error: private property
