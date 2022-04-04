/* --------------- UNDERSTANDING LET & CONST ---------------
Different way to create variables.
Const -> never changing variable
Let -> new var, for really variable 
----------------------------------------------------------*/

var myName = "Andrea";
console.log(myName);
myName = "Andrea Severini";
//With let it will be the same

const name = "Andrea";
console.log(myName);
//name = "Andrea Severini" --> you cannot re-declare a const variable

/* --------------- ARROW FUNCTIONS -------------------------
Different syntax to create functions

normal:
function myFunc(args) {
    ...
}

arrow:
const myFunc = (args) => {
    ...
}
--> no more issues with the "this" keyword in JS 
(using context)
----------------------------------------------------------*/

function printMyName(name) {
  console.log(`${name} as normal function`);
}
printMyName("Andrea");

const printMyNameArrow = (name) => {
  console.log(`${name} as arrow function`);
};
printMyNameArrow("Andrea Severini");

//smarter syntax
const multiply = (number) => number * 2;
console.log(multiply(2));

/* ------------- EXPORTS & IMPORTS (MODULES) ---------------
splitting up js in modular files

const person = {
    name: 'Andrea'
}
export default person

export const clean = () => {}
export const baseData = 10;

-->
import person from './person.js'
import prs from './person.js'

import { baseData } from './utility.js'
import { clean } from './utility.js'
import { clean as cln } from './utility.js'
import * as bundled from './utility.js' 
exported ad an object with properties
----------------------------------------------------------*/

/* -------------------- CLASSES ----------------------------
--> DEFINITION
class Person {
    name = 'Andrea'   <--property
    call = () => {..} <-- method
}

--> USAGE
const myPerson = new Person()
myPerson.call()
console.log(myPerson.name)

--> INHERITANCE 
class Person extends Master 
----------------------------------------------------------*/
class Person {
  constructor() {
    this.name = "Andrea";
  }

  printName() {
    console.log(this.name);
  }
}

const person = new Person();
person.printName();

class Human {
  constructor() {
    this.gender = "male";
  }

  printGender() {
    console.log(this.gender);
  }
}

class Person2 extends Human {
  constructor(props) {
    super(props);
    this.name = "Andrea";
  }

  printName() {
    console.log(this.name);
  }
}

const person2 = new Person2();
person2.printGender();
person2.printName();

//other methods (MODERN)

class Human {
  gender = "Male";

  printGender = () => {
    console.log(this.gender);
  };
}

class Person extends Human {
  name = "Andrea";
  gender = "Female";

  printName = () => {
    console.log(this.name);
  };
}

/* ------------- SPREAD & REST OPERATOR --------------------
SPREAD --> used to split up array elements or obj properties
    const newArray = [...oldArray, 1, 2]
    const newObj = {...oldObj, newProp: 5}
REST --> used to merge a list of fnct arguments into an array
    function sortArgs(..args) {
        return args.sort()
    }
----------------------------------------------------------*/
const numbers = [1, 3, 4];
const newNumbers = [...numbers, 5, 6];
console.log(newNumbers);

const person = {
  name: "Max",
};

const newPerson = {
  ...person,
  age: 28,
};
console.log(newPerson);

//rest operator that merge args in an array
const filter = (...args) => {
  //return only element equal to 1 if it is a number
  return args.filter((el) => el === 1);
};
console.log(filter(1, 2, 3));
