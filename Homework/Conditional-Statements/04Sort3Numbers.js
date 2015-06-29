
/**
 * Sort 3 real values in descending order.
 Use nested if statements.
 */
var a = 1;
var b = 2;
var c = 5;


if(a>b)
{
    if(b>c){
        console.log(a+" "+b+" "+c);
    }else
    {
        if(a>c){
            console.log(a+" "+c+" "+b);
        }else
        {
            console.log(c+" "+a+" "+b);
        }
    }
}
else
{
    if(b>c)
    {
        if(a>c)
        {
        console.log(b+" "+a+" "+c);
        }
        else
        {
            console.log(b+""+c+""+a);
        }
    }else
    {
        console.log(c+" "+b+" "+a);
    }
}