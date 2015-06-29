/**
 Write an expression that checks if given integer is odd or even
 */
//test variables
var firstNum = -3;
var secondNumber = 4;
var checkNumber = firstNum;
check(checkNumber);
checkNumber = secondNumber;
check(checkNumber);

function check( checkNum)
{
    if(!(checkNum%2)){
        console.log(checkNum+" is even!");
    }else
        console.log(checkNum + " is odd!");
}