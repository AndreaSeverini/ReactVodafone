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
