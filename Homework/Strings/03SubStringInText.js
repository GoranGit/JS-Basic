/**
 * Write a JavaScript function that finds how many times a substring is contained in a given text (perform case insensitive search).
 */
var text = "The text is as follows: We are living in an yellow submarine. We don't have anything else. inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days.",
 sub = 'in';

console.log(countSubStr(text,sub));

function countSubStr(text, subStr)
{
    var txt = text.toLowerCase(),
    sub = subStr.toLowerCase(),
        count = 0,
        subLen = sub.length,
        indexOf = txt.indexOf(sub,0);

    while(indexOf!==-1)
    {
        count+=1;
        indexOf = txt.indexOf(sub,indexOf+subLen);
    }
    return count;
}