/* Question 1

Given a string, reverse each word in the sentence*/
let reversedArray = []
let names = "Sawera and Shoaib are siblings"
newname = names.split(" ")//space ki base py
// console.log(newname)
newname.forEach(function (val) {
    let newSplitWord = val.split(""); // split each word into letters
    newSplitWord.reverse(); // reverse that each word 
    console.log(newSplitWord)
    let reversedWords = newSplitWord.join("")
    reversedArray.push(reversedWords);
})
let finalSentence = reversedArray.join(" ")
console.log(finalSentence);

//------------------------------------------------------------

/* Question 2

Check if an object is an array or not. Provide code*/
const obj = {
    name: "sawera",
    age: 25,
    address: "isb",
}
console.log(Array.isArray(obj));

//-----------------------------------------------------------------

/* Question 3

how to empty an array in javascript do not reset to a new array and do not loop through to pop each value */

let data = ["sawera", "sidra", false, 1, "shoaib"];
console.log(data.length);
data.length = 0;
console.log(data);

//-----------------------------------------------------------------

/* Question 4

How to check if a number is an integer */
let digit = 12.0;
if (digit % 1 === 0) {
    console.log("integer")
}
else {
    console.log(" not !")
}

//---------------------------------------------------------

/* Question 5

make this work using function and without function
duplicate ([1,2,3,4,5])          [1,2,3,4,5,1,2,3,4,5] */

//1st way 
let numbers = [1, 2, 3, 4, 5];
let duplicateNumbers = [...numbers, ...numbers];
console.log(duplicateNumbers);
//2nd way
function duplicateArray(arr) {
    return arr.concat(arr)
}
console.log(duplicateArray([1, 2, 3, 4, 5]))

//-------------------------------------------------------------------------


/* Question 6

write a javascript function that reverse a number*/

function reverseNumber(num) {
    let strNum = String(num);          // convert number to string
    let reversedArray = strNum.split("").reverse(); // split and reverse
    let reversedNum = reversedArray.join("");      // join back to string
    return reversedNum;
}

console.log(reverseNumber(12345));

//----------------------------------------------------------------------------



/* Question 7

write a javascript function that checks whether a passed string is a palindrome or not*/

function checkPalindrome(name) {
    let splitname = name.split("").reverse().join("");
    console.log(splitname);
    if (splitname !== name) {
        console.log(`${name} is not palindrome`)
    }
    else {
        console.log(`${name} is palindrome`)
    }

}
checkPalindrome("madam")

//------------------------------------------------------------------------



/* Question 8

write a javascript function that returns a passed string with letters in alphabetical order*/

function alphabetical(stringName) {
    let splitname = stringName.split("").sort().join("");
    return splitname;

}
console.log(alphabetical("palindrome"));

//-----------------------------------------------------------------------------------


/* Question 9

Write a javascript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case */

function upperCase(str) {
    let newUppercase = []
    string = str.split(" ");
    string.forEach(function (val) {
        let uppercase = val[0].toUpperCase() + val.slice(1);
        newUppercase.push(uppercase)

    })
    return newUppercase.join(" "); // return as a sentence

}
console.log(upperCase("sawera brave girl hai"))

//--------------------------------------------------------------------------------------------



/*Question 10

Write a javascript function which accepts an argument and returns the type . Note: there are six possible values that typeof returns. --> Object,boolean,function,number,string*/
function checkType() {

}
checkType()

//--------------------------------------------------------------------------



/* Question

Write a javascript function to get the number of occurences of each letter in specified string */

//----------------------------------------------------------




/* Question
Loop an array and add all members of it */

//-----------------------------------------------------------------




/* Question
Loop an array of objects and remove all objects which don't have gender's value male*/

//-----------------------------------------------------------------





/* Question

Write a javascript function to clone an array */

//-----------------------------------------------------------------





/* Question

In an array of string and numbers, add only those members which are not string */

//-----------------------------------------------------------------




/* Question

Write a javascript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array */

//---------------------------------------------------------------------


/* Question

Write a javascript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array */


//-------------------------------------------------------------------------

/*Question

Write a javascript program to find the most frequent item of an array */


//-------------------------------------------------------





/*Question

Write a javascript program to shuffle an array */


//----------------------------------------------------------------



/*Question

Write a javascript program to commute the union of two arrays
Sample Data :
console.log(union([1,2,3], [100,2,1,100]))
[1,2,3,10,100] */



//-----------------------------------------------------


















/* Question 9

*/












/* Question 10

*/












/* Question 11

*/













/* Question 12

*/









/* Question 13

*/







/* Question 14

*/












/* Question 15

*/














/* Question 16

*/















/* Question 17

*/
















/* Question 18

*/




















/* Question 19

*/

















/* Question 20

*/












/* Question 21

*/















/* Question 22

*/














/* Question 23

*/


















/* Question 24

*/











/* Question 25

*/

























/* Question 3

*/















/* Question 3

*/

