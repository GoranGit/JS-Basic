/**
 * Write a script that shows the sign (+, - or 0) of the product of three real numbers, without calculating it.
 Use a sequence of if operators.
 */

var sign = "+";

var firstNum = -1;
var secondNumber = -2;
var thirdNumber = 0;

if(firstNum<0 && secondNumber>0 && thirdNumber > 0)
{
    sign = "-";
}
if(firstNum>0 && secondNumber<0 && thirdNumber>0)
{
    sign = "-";
}
if(firstNum>0 && secondNumber>0 && thirdNumber<0)
{
    sign = "-";
}
if(firstNum<0 && secondNumber<0 && thirdNumber<0)
{
    sign = "-";
}
if(firstNum===0 || secondNumber===0 || thirdNumber===0)
{
    sign = 0;
}

console.log(sign);