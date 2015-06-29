/**
 * Write a function that extracts the content of a html page given as text.
 The function should return anything that is in a tag, without the tags.
 */

var html = "<html> <head> <title>Sample site</title> </head> <body> <div>text <div>more text</div>and more... </div>in body </body> </html>";

console.log(extractText(html));

function extractText(text)
{
    var result='';
    for(ind=0,len=text.length;ind<len;ind+=1)
    {
        if(text[ind]==='<')
        {
            while(text[ind]!=='>')
            {
                ind++;

            }
        }
        else
            result+=text[ind];
    }
    return result;
}
