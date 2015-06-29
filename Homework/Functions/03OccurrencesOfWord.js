/**
 * Write a function that finds all the occurrences of word in a text.
 The search can be case sensitive or case insensitive.
 Use function overloading.
 */
var text = 'Write a function that finds all the occurrences of word in a a, text.The search can be case sensitive or case insensitive a.Use function overloading.',
    word = 'A';
console.log(count(text,word));
console.log(count(text,word,true));

function count(text,word,caseSensitive)
{
    caseSensitive = caseSensitive||false;
    var result = 0;
    var arr = text.split(' ').join('.').split('.').join(',').split(','); // work to slow.
    for(var i of arr)
    {
        switch (caseSensitive) {
            case true:

                if(i===word)
                {
                    result++;
                }
                break;

            case false:
                if(i.toLowerCase() === word.toLowerCase())
                {
                    result ++;
                }
                break;
        }
    }
    return result;
}
