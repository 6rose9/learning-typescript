var Student = /** @class */ (function () {
    function Student(name, age) {
        this.name = name;
        this.age = age;
    }
    Student.prototype.display = function () {
        console.log("I am ".concat(this.name, ". I am ").concat(this.age, " years old. My headmaster is ").concat(Student.headmaster, "."));
    };
    Student.greeting = function (object) {
        // static method can't access instance properties/methods
        console.log("Hello ".concat(object.name));
    };
    Student.headmaster = "U Thaung Naing";
    (function () {
        console.log("I am static block for initial static members");
    })();
    (function () {
        console.log("static block may be more than one and execute before constructor");
    })();
    return Student;
}());
var student1 = new Student("Ma Su Su Hlaing", 12);
student1.display();
Student.greeting(student1);
var student2 = new Student("Mg Kaung Myat Lin", 15);
student2.display();
Student.greeting(student2);
