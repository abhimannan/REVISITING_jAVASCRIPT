console.log("abhi");
alert box:
alert("Double quotes");
alert('single quote');
// user input 
window.prompt("enetr the age: ");
window.alert("Receive inputs :");
console.log("CTRL+Shift+J");

//datatypes in js
primitive vs non - primitive datatypes
primitive datatypes
let age = 20;
let name = "abhi";
let isstudent = true;
let x;
let car = {
 is: 90,
 name: "lambo"
}
let marks = [90, 0, 98, 87];
console.log(typeof (marks))
console.log(marks)

//creating class and for the same class 
//i am created multiple objects
class student {
 constructor(name, marks) {
  this.name = name;
  this.marks = marks;
 }
}
let car1 = new student("lambo", 152);
let car2 = new student("abhi", 185);
let car3 = new student("geetha", 65);
console.log(car2);

// we can change the value of the variable
var name = "abhi";
name = "geetha";
console.log(name);

// task : display the name in the alert box without using the string
alert(name)

let age = window.prompt("enter your age");
alert(`Your age is ${age}`);

// rules to create variables
   =>it must have meaning
 => variable name can't start width numbers
   =>doesn't have space 
   =>don't start with special charecters
   =>we can create an variable with "camalCase"
   => resevered words cant be used(keywords, datatypes)


//     Strings :
//      Concatination +
let first_name = "abhi";
let last_name = "mannan";
let fullname = first_name + " " + last_name;
// console.log(fullname);
alert(first_name.length);


// Task :-
function usermessage() {
 let message = window.prompt("Enter the message : 10charecters");
 if (message.length > 10) {
  console.log(message);
 }
 else {
  console.log("enter the more charecters");
 }
}
usermessage();

// Task :-o/p=>Your have written 182 charecters 
//             you have -42 charecters left

function usermessage() {
 let totalcharecters = 10;
 let user = window.prompt("enter the feedback with in", totalcharecters);
 let userLength = user.length;
 if (userLength < 10) {
  console.log(`U have entered ${userLength}charecters and remaing ${totalcharecters - userLength}charecters`)
 }
 else if (userLength > 10) {
  let display = user.slice(0, 10);
  console.log(display.toUpperCase());
 }
}
usermessage();

let name = "abhi mannan";
console.log(name.slice(5, 15));

first letter sholud be Capital
console.log(name.charAt("a").toUpperCase() + name.slice(1, 11));

// Task :-

let userName = window.prompt("Eneter Your Name : ");
alert(`Hellow ${userName}`);
name has to Start with UPPERCASE
let upper = userName.charAt(0).toUpperCase(); // first letter => variable.slice(0,1)
alert(`Hello ${upper}${userName.slice(1, userName.length)}`);

------------------- Day1-----------------------