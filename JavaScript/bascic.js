/*var name = "nisarga"
var name = "Anu"
name = "bhanu"

let names = 3
names = 3
names = 3

const pi = 3.1455
//const pi=3.1455 *error but can be used multiple time without using const */

//---------------------------------------------------------------//

var age = 10  //can declare and init muli
let gender = 'female'//can declare once init muli but dont
const institute = "x-workz"//can declare once init muli but dont
document.writeln(age)

//---------------------------------------------------------------//

let emp1 = {
    id: 12,
    empl_name: "nis",
    salary: 30000
}

let emp2 = new Object();
emp2.id = 21
emp2.empl_name = "nisarga"
emp2.salary = 40000
emp2.id = 15

function emp3(id, empl_name, salary) {
    this.id = id;
    this.empl_name = empl_name;
    this.salary = salary;
}
let emp3 = emp3(15, "bhumi,12000");
let emp3 = emp3("ghb", "bhumi,12000");

//------------------------------------------------------------------//

let stu1 = { names: "Aishu", age: 21, location: "Shiv" }

let stu2 = new Object();
stu2.names = "Aish"
stu2.age = 22
stu2.location = "Bangl"

function stu3(names, age, location) {
    this.names = names;
    this.age = age;
    this.location = location;
}

let obj3=stu3(satisfies,satisfies,s)



