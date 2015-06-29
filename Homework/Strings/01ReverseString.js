/**
 *Write a JavaScript function that reverses a string and returns it.
 */
//test variables
var  inputString = 'sample';

console.log(reverse(inputString));
function reverse(str)
{
 var res =  str.split('').reverse().join(''); // using for loop work faster
    return res;
}