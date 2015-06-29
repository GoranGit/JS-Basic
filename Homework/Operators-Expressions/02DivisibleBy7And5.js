/**
 * Write a boolean expression that checks for given integer if it can be divided (without remainder) by 7 and 5 in the same time.
 */
//test variables
var test1 = 3;
var test2 = 0;
var test3=5;
var test4= 7;
var test5 = 35;
var test6 =140;

isDevisibleWith5And7(test1);
isDevisibleWith5And7(test2);
isDevisibleWith5And7(test3);
isDevisibleWith5And7(test4);
isDevisibleWith5And7(test5);
isDevisibleWith5And7(test6);

function isDevisibleWith5And7(number)
{
        console.log(!(number%35));//becouse 5 and 7 are coprime  numbers
}