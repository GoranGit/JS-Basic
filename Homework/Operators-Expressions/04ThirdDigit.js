/**
 *Write an expression that checks for given integer if its third digit (right-to-left) is 7.
 */
//test variables
var number = -1112709;

check(number);

function check(number)
{
    var lastThreeNum = number%1000;
    var firstDigitOfThree = (lastThreeNum/100)|0;
    console.log(Math.abs(firstDigitOfThree)===7);
}