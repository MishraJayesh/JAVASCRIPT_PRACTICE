// Practice_Set_11

// Q.01 and Q.02
// class Complex {
//     constructor(real, imaginary) {
//         this.real = real;
//         this.imaginary = imaginary;
//     };
//     add(num) {
//         this.real = this.real + num.real;
//         this.imaginary = this.imaginary + num.imaginary;
//     }
// }

// let a = new Complex(2, 4);
// let b = new Complex(6, 2);
// a.add(b);
// console.log(`${a.real}+${a.imaginary}i`);


// Q.03 and Q.04
// class Human {
//     constructor(name, hobbies) {
//         this.name = name;
//         this.hobbies = hobbies;
//     };
//     walk() {
//         console.log(this.name + "Human Is Walking");
//     };
// }

// class Student extends Human {
//     walk() {
//         console.log(this.name + " Student Is Walking");
//     };
// }

// let o = new Student("Jayesh:", "Reading And Writing");
// o.walk();

// console.log(o instanceof Human);


// Q.05
class Complex {
    constructor(real, imaginary) {
        this.real = real;
        this.imaginary = imaginary;
    };
    add(num) {
        this.real = this.real + num.real;
        this.imaginary = this.imaginary + num.imaginary;
    }
    get real() { return this._real; }
    get imaginary() { return this._imaginary; }
    set real(newReal) {
        this._real = newReal;
    }
    set imaginary(newImaginary) {
        this._imaginary = newImaginary;
    }
}

let a = new Complex(2, 4);
console.log(a.real, a.imaginary);
a.real = 10;
a.imaginary = 10;
let b = new Complex(6, 2);
a.add(b);
console.log(`${a.real}+${a.imaginary}i`);
