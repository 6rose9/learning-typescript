// => Index Access Type

type Staff = {
    name: string;
    role: string;
    salary: number;
}

// Selects only 'name' and 'role' properties from Staff
// type StaffInfo = Pick<Staff, 'name' | 'role'>;
// type StaffInfo = Omit<Staff, 'salary'>;

type StaffInfo = {
    name: Staff['name'];
    role: Staff['role'];
};

let employee: StaffInfo = {
    name: "U Ba Taung",
    role: "Manager"
}

// => Index Signature

type bookList = {
    [key: string]: string;
}

let libraryBooks: bookList = {
    "Min Lu": "The Moon in the Lake",
    "Thant Myint-U": "The River of Lost",
    "Nyein Kyaw": "Smile and be Bowed to, Laugh and be Bowed to",
    "Juu": "Remembrance",
    "Mya Than Tint": "Over the Spike Mountain, Across the Sea of Fire",
    "Journal Kyaw Ma Ma Lay": "Not Out of Hate",
}

let favoritedBook = {
    "name": "The Moon in the Lake",
    "author": "Min Lu",
    "published": "mid-1980s"
}

// => Mapped Type

// Syntax

type MappedType<T> = {
    [key in keyof T]: T[key]
}

// exe1

type Original = {
    name: string;
    age: number;
}

type Copied = {
    [key in keyof Original]: Original[key];
}

// exe2

type People = {
    name: string;
    age: number;
}

type Optional<T> = {
    [P in keyof T]?: T[P];
}

type OptionalPerson = Optional<People>;
// Excepted: {name?:string, age?:number}

type ReadOnlyType<T> = {
    readonly [R in keyof T]: T[R];
}

type ReadOnlyPerson = ReadOnlyType<People>;
// Excepted: {readonly name: string, readonly age: number}