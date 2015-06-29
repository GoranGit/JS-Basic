/**
 * Write a function that formats a string using placeholders.
 The function should work with up to 30 placeholders and all types.
 */
//test variable
var text = stringFormat('Hello {0} {1} {0}','Peter','Pan');

console.log(stringFormat(text));


function stringFormat()
{
    var str = arguments[0];
    for(var i= 1,numOfArgs = arguments.length;i<numOfArgs;i+=1)
    {
        var reg = '{'+(i-1)+'\\}';
       str = str.replace(new RegExp(reg,'g'),arguments[i]);
    }
    return str;

}

