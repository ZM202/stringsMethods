/*1. Change the code shown below to be a String Concat Method

let coffee = “French”;
let flavor = “Vanilla”;
let order = coffee + “ ” + flavor;
console.log(order);
*/

// Function myOrder(coffeeOrder); {
//     let coffee = "French";
//     let flavor = "Vanilla";
//     let coffeeOrder = coffee.concat(flavor);
//    alert(coffeeOrder);
//    }
//Question>> I'm not sure why there is syntax error.

/*2. Templating where we insert variables into a string to create a dynamic string
    Write the proper syntax to have the console.log method show the the following using templating:
I have 3 coffees.
I also have 10 chais.
I have  a total of 13 drinks total.

let coffee = 3;
let chai = 10;
console.log(`________________`);
console.log(`_________________`);
console.log(`_________________`);
*/

 let coffee = 3;
 let chai = 10;
 let coffeeOrder = coffee + chai;
 console.log(`I have ${coffee} coffee ,also have ${chai} chais. I have a total of ${coffeeOrder} drinks.`);

 /*3. Searching the String on content!
 •	indexOf String Method: Find where 42 occurs
 function myFunction() {
   let str = "Can you guess what is the index of 42 is? I am sure you will be surprised!";
   let answer = ____________________;
 console.log(answer);
 };

*/

//  function string(answer);
//  let str = "Can you guess what is the index of 42 is? I am sure you will be surprised!";
//  let answer = "no";
//  console.log(`${answer}`);
 

 /*length method: Find how long the string is*/

//  function string(answer) {
//    let str = "Can you guess how long this string is? I am sure you will be surprised! (Hint:It is not 42.)";
//    let answer = 71;
//  console.log(`${answer}`);
//  };
 
 /* Replacing values in a string.*/

// function question(status) {
//   let str1 = "How you doin?";
//   let str2 = "I'm doing good.";
// console.log(str2);
// };

/*5. Using Trim Method for strings.*/

// function myFunction() {
//   var str = "         SOCIAL DISTANCING!!!                    ";
//   alert(str.trim());
// };

/*6. Making strings case sensitive 
	toUpperCase */
function myFunction() {
  let str = "social distancing!!";
  let res = str.toUpperCase();
  console.log(res);
};

o	toLowerCase
function myFunction() {
  let str = "QuiEt VoICeS...PLEASE";
  let res = ___________________;
  console.log(str.toLowerCase());
}
