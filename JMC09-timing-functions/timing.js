// console.log("test");

// // There are basically 2 timing functions in js
// // 1) setInterval: used for looping or repeating a certsin action
// // 2) setTimeout: used to call a function to run once after a certain time delay

// // clearInterval: used to stop a set interval

// // setInterval: takes two mandatory parameter or arguements
// // callback function and time interval in miliseconds
// // setInterval(function, duration)

// // setTimeout: takes two mandatory parameter or arguements
// // callback function and time interval in miliseconds
// // setTimeout(function, duration)

// // SstInterval: takes only one mandatory parameter or arguement which is the interval variable
// // setInterval(function, duration)
let i = 0;
// let con = true;

// Infinite loop using while loop
// while (con == true) {
//     console.log(i++);

//         if(i > 10000){
//             con = false;
//         }
//  }

// let timer = setInterval(incrementeye, 1000);

// function incrementeye() {
//   console.log(i++);
// }

// setTimeout(printOne, 5000);

// function printOne() {
//   console.log("Exam ended");
// }

// // To be able to clear a setInterval, you must parameterise it (make it a variable)

// let runTime = setInterval(increamenteye, 5000);

// function increamenteye() {
//   console.log(i++);
// }

// let runTime2 = setInterval(increamenteye2, 3000);

// function increamenteye2() {
//   console.log("Prints count");
// }

// setTimeout(stopRunTime, 10000);

// function stopRunTime() {
//   clearInterval(runTime2);
// }

// // setTimeout is non-blocking like alert
// console.log("first");

const span1 = document.getElementById("span1");

let pos = [
  "translateX(20px)",
  "rotate(30deg)",
  "translateY(20px)",
  "rotate(90deg)",
  "translateX(-20px)",
  "rotate(180deg)",
  "translateY(-20px)",
  "rotate(360deg)",
];

// second scene
const span21 = document.getElementById("span21");
const span22 = document.getElementById("span22");
const span23 = document.getElementById("span23");
const span24 = document.getElementById("span24");

let pos21 = [
  "translateY(-100px) translateX(0)",
  "translateY(-100px) translateX(20px)",
  "translateY(-100px) translateX(120px)",
  "translateY(0) translateX(120px)",
  "translateY(-100px) translateX(0)",
];

let pos22 = ["translateX(-20px)", "translateX(-80px)"];

let pos23 = ["translateX(-20px)", "translateX(-80px)"];

let pos24 = ["translateX(-20px)", "translateX(-80px)"];

let pos25 = [
  "translateX(20px)",
  "rotate(30deg)",
  "translateY(40px)",
  "rotate(90deg)",
  "translateX(60px)",
  "rotate(180deg)",
  "translateY(80px)",
  "rotate(360deg)",
];

let p = 0;

// let animate = setInterval(function () {
//   span1.style.transform = pos[p];
//   span21.style.transform = pos21[p];
//   span22.style.transform = pos22[p];
//   span23.style.transform = pos23[p];
//   span24.style.transform = pos24[p];

//   p++;

//   if (p == 7) {
//     p = 0;
//   }
// }, 500);

// setTimeout(function () {
//   clearInterval(animate);
// }, 20000);

// Task
// 1) Build a stop clock using setInterval,
// the clock will have a stop, reset, pause and start button

// 2) Build an animated aboject using only javascript. (No HTML or CSS)
