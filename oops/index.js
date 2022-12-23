// OOPs
// Prototype

// let a = {
//     name: "Jayesh",
//     language: "JavaScript"
// }
// console.log(a);

// let p = {
//     run: () => {
//         alert("run");
//     },
// };

// a.__proto__ = p;
// a.run();

// let a = {
//     name: "Jayesh",
//     language: "JavaScript",
//     run: () => {
//         alert("self run");
//     },
// }
// console.log(a);

// let p = {
//     run: () => {
//         alert("run");
//     },
// };

// a.__proto__ = p;
// a.run();
// let a = {
//     n1: "Jayesh",
//     language: "JavaScript"
// }
// console.log(a);

// let p = {
//     run: () => {
//         alert("run");
//     },
// };

// p.__proto__ = {
//     n2: "Jay"
// }

// a.__proto__ = p;
// a.run();
// console.log(a.n2);



// Classes And Objects

// class RailwayForm {
//     fill(givenName, trainno) {
//         this.name = givenName;
//         this.trainno = trainno;
//         alert(this.name + ": Fill The Form For Train Number " + this.trainno);
//     };
//     upload() {
//         alert(this.name + ": Upload The Form For Train Number " + this.trainno);
//     };
//     submit() {
//         alert(this.name + ": Form Submitted For Train Number " + this.trainno);
//     };
//     cancel() {
//         alert(this.name + ": This Form Is Cancelled For Train Number " + this.trainno);
//     };
// }
// // Creates The Form
// let jayeshForm = new RailwayForm();
// let harryForm = new RailwayForm();
// // Fills The Form
// jayeshForm.fill("Jayesh", 123456);
// harryForm.fill("Harry", 678910);
// // Uploads The Form
// jayeshForm.upload();
// harryForm.upload();
// // Submits The Form
// jayeshForm.submit();
// harryForm.submit();
// // Cancels The Form
// jayeshForm.cancel();
// harryForm.cancel();

// class RailwayForm {
//     constructor(givenName, trainno, address) {
//         console.log(" Constructor Called... " + givenName + " " + trainno);
//         this.name = givenName;
//         this.trainno = trainno;
//         this.address = address;
//     };
//     upload() {
//         alert(this.name + ": Your Form Uploaded For Train Number " + this.trainno);
//     };
//     preview() {
//         alert(this.name + ": Your Form For Train Number " + this.trainno + " And Your Address Is " + this.address);
//     };
//     submit() {
//         alert(this.name + ": Your Form Is Submitted For Train Number " + this.trainno);
//     };
//     cancel() {
//         alert(this.name + ": Your Form Is Cancelled For Train Number " + this.trainno);
//     };
// }
// // Creates And Fills The Form
// let jayeshForm = new RailwayForm("Jayesh", 123456, "B-40, Ashok Vihar, Gurgaon, Haryana");
// let harryForm = new RailwayForm("Harry", 678910, "C-80, Vasant Vihar, Amritsar, Punjab");
// // Uploads The Form
// jayeshForm.upload();
// harryForm.upload();
// // Previews The Form
// jayeshForm.preview();
// harryForm.preview();
// // Submits The Form
// jayeshForm.submit();
// harryForm.submit();
// // Cancels The Form
// jayeshForm.cancel();
// harryForm.cancel();
//


//The Extend Keywords

// class Animal {
//     constructor(name, color) {
//         this.name = name;
//         this.color = color;
//     };
//     run() {
//         console.log(this.name + " Is Running! ");
//     };
//     shout() {
//         console.log(this.name + " Is Shouting! ");
//     };
// };

// class Monkey extends Animal {
//     eatBanana() {
//         console.log(this.name + " Is Eating Banana! ");
//     };
// };

// let pet = new Animal("Bruno", "Black");
// let ani = new Monkey("Chimpu", "Orange");

// pet.shout();
// ani.eatBanana();


// Method Overriding

// class Employee {
//     login() {
//         console.log(` Employee Has Logged In `);
//     };
//     logout() {
//         console.log(` Employee Has Logged Out `);
//     };
//     requestLeaves(leaves) {
//         console.log(` Employee Has Requested ${leaves} Leaves `);
//     };
// };

// class Programmer extends Employee {
//     requestCoffee(x) {
//         console.log(` Employee Has Requested ${x} Coffee`);
//     };
// };

// let e = new Employee();
// e.login();
// e.requestLeaves(3);

// class Employee {
//     login() {
//         console.log(` Employee Has Logged In `);
//     };
//     logout() {
//         console.log(` Employee Has Logged Out `);
//     };
//     requestLeaves(leaves) {
//         console.log(` Employee Has Requested ${leaves} Leaves - Auto Approved `);
//     };
// };

// class Programmer extends Employee {
//     requestCoffee(x) {
//         console.log(` Employee Has Requested ${x} Coffee`);
//     };
//     requestLeaves(leaves) {
//         super.requestLeaves(leaves);
//         console.log(` One Extra Is Granted `);
//         // console.log(` Employee Has Requested ${leaves + 1} Leaves (One Extra)`);
//     };
// };

// let e = new Programmer();
// e.login();
// e.requestLeaves(3);


// Constructor Overriding

// class Employee {
//     constructor(name) {
//         console.log(`${name} - Employee's Constructor Is Here `);
//         this.name = name;
//     };
//     login() {
//         console.log(` Employee Has Logged In `);
//     };
//     logout() {
//         console.log(` Employee Has Logged Out `);
//     };
//     requestLeaves(leaves) {
//         console.log(` Employee Has Requested ${leaves} Leaves - Auto Approved `);
//     };
// };

// class Programmer extends Employee {
//     constructor(name) {
//         console.log(`${name} - Programmer's Constructor Is Here. This Is A Newly Written Constructor `);
//         this.name = name;
//     };
//     requestCoffee(x) {
//         console.log(` Employee Has Requested ${x} Coffee`);
//     };
//     requestLeaves(leaves) {
//         super.requestLeaves(leaves);
//         console.log(` One Extra Is Granted `);
//     };
// };

// let e = new Programmer(`Jayesh`);
// e.login();
// e.requestLeaves(3);

// class Employee {
//     constructor(name) {
//         console.log(`${name} - Employee's Constructor Is Here `);
//         this.name = name;
//     };
//     login() {
//         console.log(` Employee Has Logged In `);
//     };
//     logout() {
//         console.log(` Employee Has Logged Out `);
//     };
//     requestLeaves(leaves) {
//         console.log(` Employee Has Requested ${leaves} Leaves - Auto Approved `);
//     };
// };

// class Programmer extends Employee {
//     constructor(name) {
//         super(name);
//         // this.name = name;
//         console.log(` This Is A Newly Written Constructor `);
//     };
//     requestCoffee(x) {
//         console.log(` Employee Has Requested ${x} Coffee`);
//     };
//     requestLeaves(leaves) {
//         super.requestLeaves(leaves);
//         console.log(` One Extra Is Granted `);
//     };
// };

// let e = new Programmer(` Jayesh`);
// e.login();
// e.requestLeaves(3);


// Static Methods

// class Animal {
//     constructor(name) {
//         this.name = name;
//     };
//     walk() {
//         alert("Animal " + Animal.capitalize(this.name) + " Is Walking");
//     };
//     static capitalize(name) {
//         return name.charAt(0).toUpperCase() + name.substr(1, name.length);
//     }
// };
// m = new Animal(`monkey`);
// m.walk();

// Getters And Setters

// class Person {
//     get(name) {
//         this.name = name;
//         console.log("Hello " + this.name + " How Are You?");
//     };
//     set(newName) {
//         this.name = newName;
//         console.log("Hello " + this.name)
//     };
// }
// n = new Person();
// n.get("Jay");
// n.set("Preet");

// class Animal {
//     constructor(name) {
//         this._name = name;
//     };
//     fly() {
//         alert("I Am Flying!");
//     };
//     get name() {
//         return this._name;
//     };
//     set name(newName) {
//         this._name = newName;
//     };
// };
// let a = new Animal("Bruno");
// a.fly();
// console.log(a.name);
// a.name = "Jack";
// console.log(a.name);

class Animal {
    constructor(name) {
        this.name = name;
    };
    fly() {
        console.log("I Am Flying!");
    };
    get name() {
        // return this.name;
        return this._name;

    };
    set name(newName) {
        this._name = newName;
    };
};
let a = new Animal("Bruno");
a.fly();
console.log(a.name);
a.name = "Jack";
console.log(a.name);


// Instance Operator

console.log(a instanceof Animal);