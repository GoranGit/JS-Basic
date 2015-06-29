/**
 * Write a JavaScript function to check if in a given expression the brackets are put correctly.
 */
var expression = '((a-b)/5-d)'

if(checkBrackets(expression))
{
    console.log('correct!');
}
else
{
    console.log('incorrect!');
}

function checkBrackets(str) {
    var len = str.length,
        openBr = 0,
        closeBr = 0;

    for (var i = 0; i < len; i += 1)
    {
        if(str[i]==='(')
        {
            openBr+=1;
        }
        if(str[i]===')')
        {
            closeBr+=1;
        }
    }
    if(openBr==closeBr)
    {
        return true;
    }else
    {
        return false;
    }
}