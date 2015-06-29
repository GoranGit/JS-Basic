/**
 *Write a script that finds the max and min number from a sequence of numbers.
 */
    //test variable
var a=[4,2,6,-1,8,4,3,9];

var min  = Math.min();
var max = Math.max();

for(var k of a)
{
    if(k>max)
    {
        max = k;
    }
    if (k<min)
    {
        min = k;
    }
}

console.log(max);
console.log(min);