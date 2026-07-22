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
    private _name: string;

    constructor(n: string) {
        this._name = n;
    }

    get name(): string {
        return this._name;
    }

    set name(newvalue: string) {
        if (newvalue.length > 3) {
            this._name = newvalue;
        } else {
            console.warn("name must be at least 3 characters")
        }
    }
}

class Developer extends People {
    protected _skills: string[];

    constructor(public developername: string, ...arrs: string[]) {
        super(developername);
        this._skills = arrs;
    }

    get skills(): string[] {
        return this._skills;
    }

    set skills(newSkills: string[]) {
        if (newSkills.length > 0) {
            this._skills = newSkills;
        } else {
            console.warn("Developer must have at least one skill");
        }
    }

    getinfo(): void {
        console.log(`Developer: ${this.developername}`);
        console.log(`Skills: ${this._skills.join(", ")}`);
    }
}

let backendDev = new Developer("Crystal", "Laravel", "Express", "MySQL", "MongoDB");
backendDev.getinfo();
// Developer: Crystal
// Skills: Laravel, Express, MySQL, MongoDB

backendDev.developername= "Zin Zin";

backendDev.getinfo();
// Name: Zin Zin
// Skills: Laravel, Express, MySQL, MongoDB

let people = new People("Zin Zin Thin");
console.log(people.name); // name is getter method

// people._name = "zztz";  Error: private property