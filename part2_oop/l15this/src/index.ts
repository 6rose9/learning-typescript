// console.log(this); // {}

let student = {
    study() {
        console.log('I am studying => ', this);
    }
}

student.study(); // I am studying => { study: [Function: study] }

// -------------------------------// -------------------------------// -------------------------------

class Student {
    study() {
        console.log('I am studying => ', this);
    }
}

student = new Student();
student.study(); // I am studying => Student {}
console.log(student); // Student {}
console.log(typeof student); // object

// -------------------------------// -------------------------------// -------------------------------

// call(), apply(), bind()

function sayhi(name: string, msg: string) {
    console.log(this); // "strict": false, if true, error
    console.log(`Hey.... ${name}, ${msg}`);
}

sayhi("Bo Bo", "How are you?"); // undefined, Hey...Bo Bo, How are you?

sayhi.call({ name: "Crystal" }); // { name: 'Crystal' } Hey.... undefined, undefined

sayhi.call("Bo Bo", "How are you?"); // Bo Bo Hey.... How are you?, undefined

sayhi.call({}, "Bo Bo", "How are you?"); // {} Hey... Bo Bo, How are you?

// -------------------------------

// sayhi.apply("Bo Bo", "How are you?"); ERROR

sayhi.apply({}); // {} Hey... undefinded, undefined

sayhi.apply({}, ["Bo Bo", "How are you?"]); // {} Hey... Bo Bo, How are you?

// -------------------------------

let bindme = sayhi.bind({}, "Bo Bo", "How are you?");
bindme(); // {} Hey... Bo Bo, How are you?