// Control Statements

let track = false;
if (track) {
 console.log("The track is clear");
}
else {
 console.log("The track is NOT clear");
}

// // +ve,-ve
let num = 5;
if (num > 0) {
 console.log("the num is +ve");
}
else {
 console.log("-ve number");
}

// // even or odd
switch (num) {
 case num === 0:
  console.log("the number is 0");
  break;
 case num > 0:
  console.log("the num is +ve");
  break;
 case num < 0:
  console.log("the num ios -ve");
  break;
 default:
  console.log("enter the valid num");

}

//  ==,===
var x = 2;
var y = "2";
console.log(x == y);  // values compared
console.log(x === y); // vcalues + datatypes are compared
console.log(x = !y);
console.log(x == !y)

// logical operators &&,||,!
if (x == y || x === y) {
 console.log("both the conditions are satisfied");
}
else {
 console.log("not satisfied");
}

let x = 15;
if (x > 1) {
 for (let i = 2; i <= x; i++) {
  if (i % 2 !== 0) {
   console.log(i);
  }
 }
}
// the given year is leap yar or not
let year = 2024;
if (year % 100 === 0 ? year % 400 === 0 : year % 4 === 0) {
 console.log(`${year} is leap year`);
}
else {
 console.log("This is not leap year");
}


// another way of pragram for leap or not
let year = 2024;
if (year % 4 === 0) {
 if (year % 100 === 0) {
  if (year % 400 === 0) {
   console.log(`${year} is leap year`);
  } else {
   console.log(`${year} is not leap year`);
  }

 } else {
  console.log(`${year} is leap year`);
 }

} else {
 console.log(`${year} is not leap year`);
}