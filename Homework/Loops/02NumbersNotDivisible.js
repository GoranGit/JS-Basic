/**
 *Write a script that prints all the numbers from 1 to N, that are not divisible by 3 and 7 at the same time
 */
var n = 100;

for(var i=1;i<=n;i++)
{
    if(divBy3And7(i))
    {
        console.log(i);
    }
    else
    {
        continue;
    }
}



function divBy3And7(number)
{
    if(number%3 == 0 && number%7===0)
    {
        return false;
    }
    else
    {
        return true;
    }
}