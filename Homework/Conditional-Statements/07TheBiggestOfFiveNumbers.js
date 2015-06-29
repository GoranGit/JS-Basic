/**
 * Write a script that finds the greatest of given 5 variables.
 Use nested if statements.
 */
// test variables
var a = 10000;
var b = 10;
var c = 40000;
var d = 500;
var e = 30000;

if(a>b)
{
    if(a>c)
    {
        if(a>d)
        {
            if(a>e){
                console.log(a);
            }
            else
            {
                console.log(e);
            }
        }
        else
        {
            if(d>e)
            {
                console.log(d);
            }
            else
            {
                console.log(e);
            }
        }
    }
    else
    {
        if(c>d)
        {
            if(c>e)
            {
                console.log(c);
            }
            else
            {
                console.log(e);
            }
        }
        else
        {
            if(d>e)
            {
                console.log(d);
            }
            else
            {
                console.log(e);
            }
        }

    }
}
else
{
    if(b>c)
    {
        if(b>d)
        {
            if(b>e)
            {
                console.log(b);
            }
            else
            {
                console.log(e);
            }
        }
        else
        {
            if(d>e)
            {
                console.log(d);
            }
            else
            {
                console.log(e);
            }
        }

    }
    else
    {
        if(c>d)
        {
            if(c>e)
            {
                console.log(c);
            }
            else
            {
                console.log(e);
            }
        }
        else
        {
            if(d>e)
            {
                console.log(d);
            }
            else
            {
                console.log(e);
            }
        }
    }

}