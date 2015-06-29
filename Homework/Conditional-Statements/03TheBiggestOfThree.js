/**
 * Write a script that finds the biggest of three numbers.
 Use nested if statements.
 */
var a = 6;
var b = 8;
var c = 3;

if(a>b)
{
    if(b>c){
        console.log(a);
    }else
    {
        if(c>a)
        {
            console.log(c);
        }
    }
}
else
{
    if(b>c)
    {
        console.log(b);
    }else
    {
        console.log(c);
    }
}