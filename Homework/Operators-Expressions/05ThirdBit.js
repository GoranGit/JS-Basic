/**
 * Write a boolean expression for finding if the bit #3 (counting from 0) of a given integer.
 The bits are counted from right to left, starting from bit #0.
 The result of the expression should be either 1 or 0.
 */
//test variables
var n = 5;
console.log(+!!(n&8));
n = 8;
console.log(+!!(n&8));
n = 0;
console.log(+!!(n&8));
n = 15;
console.log(+!!(n&8));
n = 5343;
console.log(+!!(n&8));
n = 62241;
console.log(+!!(n&8));