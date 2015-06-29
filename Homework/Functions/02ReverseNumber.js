/**
 * Write a function that reverses the digits of given decimal number.
 */
//test variable
var number = 123.45;

var result = reverse(number);
console.log(result);


function reverse(number)
{
    var  toStr = number.toString();
   var res = '';
    for(var i=toStr.length-1;i>=0;i-=1)
    {
        res +=toStr[i];
    }
    return parseFloat(res);
}