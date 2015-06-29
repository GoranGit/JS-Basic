/**
 *Write a function that replaces non breaking white-spaces in a text with &nbsp;
 */

var text = 'bla  bla  bla bal \xA0';
console.log(convert(text));


function convert(text)
{
    var result = '';
    for(var i= 0, len = text.length;i<len ; i+=1)
    {
        result+= text[i] == String.fromCharCode(160)?"&nbsp":text[i];
    }
    return result;

}