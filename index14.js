/* Only Odds


create an array named 'begin'
create an array for the results, named 'end'
Make a loop that goes through each index starting at 0
for (let i = 0; i < input.length; i++)
inside an if condition:
at each index, which is a number, check to see if its even or odd
to check that, use the % (modulus) operator - (example 2 % 2) if we get 0. its even if we get 1, its odd
if its odd, push the number to the 'output' array 
outside the loop, console.log the 'output' array

[2,4,6,8,11,20,15,22]
12
*/


const input = [2, 4, 6, 8, 11, 20, 15, 22];
const output = [];

for(let i = 0; i < input.length; i++) {
    if(input[i] % 2 === 1)(
        output.push(input[i]));
    
}
console.log(output);



//Vowel vs. consonant pseudocode

//Define a variable vowel = 0 and consonant = 0
//Define a variable string = ""
//Write a for loop with an if condition
//Inside the for loop, start at i = 0 and i < string.length, with i++
//At each iteration, check to see if the letter at index i is a vowel, using an if/else
//If string[i] === "a", then vowel++
//else if string[i] === "e", then vowel++
//else, consonant++
//then console.log(string + " has " + consonant + " consonants and " + vowel + " vowels")
//"a", "e", "i", "o", and "u" are considered vowels.
//Every other letter is considered a consonant.

var vowel = [];

var consonant = [];

const hello = "hello";
console.log(hello)

for(let i=0; i < hello.length; i++){
    if( hello[i] === 'a' ||
    hello[i]=== 'e' ||
    hello[i] === 'i' ||
    hello[i] === 'o' ||
    hello[i] === 'u'){
        vowel.push(hello[i]);
    }else{
        consonant.push(hello[i]);
    }
}
console.log( hello + " has " + vowel + " and consonant has " + consonant );


var vowel = [];

var consonant = [];
const stringIn = "ukelele";
console.log(stringIn);

for(let i=0; i < stringIn.length; i++){
    if( stringIn[i] === 'a' ||
    stringIn[i]=== 'e' ||
    stringIn[i] === 'i' ||
    stringIn[i] === 'o' ||
    stringIn[i] === 'u'){
        vowel.push(stringIn[i]);
    }else{
        consonant.push(stringIn[i]);
    }
}
console.log("The Vowels are :" + vowel);
console.log("The Consonants are :" + consonant);


/* Reverse Array

Create an array named backArray = []
Create an array named forwArray = []
In a for loop, start from the end and iterate until the 0th index until 
i is >= 0 
i = forwArray.length-1, i >= 0, i--
Add backArray[i] to forwArray - backArray.push(forwArray[i])
console.log(backArray)

*/

const forwArray = [1, 3, 5, 7, 9, 11];
const backArray = [];

for (i = forwArray.length-1; i >= 0; i--) {
    backArray.push(forwArray[i]);
}

console.log(backArray);


/* Fizz Buzz Pseudocode


Create a code that prints each number from 1 to 100 on a new line
For each multiple of 3, print 'Fizz' instead of the number
For each multiple of 5, print 'Buzz' instead of the number
for the numbers that are multiples of both 3 and 5, print 'FizzBuzz' instead of number

create const FizzBuzz = 0
in a for loop start from 0 until 'i<=100'
if number % 3 === 0, print Fizz
if number % 5 === 0, print Buzz
if number % 3 === 0 AND % % === 0, print FizzBuzz
Else print FizzBuzz[i]

*/

for (i = 0; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}
