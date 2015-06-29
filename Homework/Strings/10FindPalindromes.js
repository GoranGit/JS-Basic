/**
 * Write a program that extracts from a given text all palindromes, e.g. "ABBA", "lamal", "exe".
 */
//test variable
var text = 'oko aabbaa lamal hahaha!';

console.log(findPalindromes(text));
function findPalindromes(text)
{
    var arr = text.split(' ').filter(function(a){
            return !!a;
        }),
        res = [];
    for(var i=0, len=arr.length;i<len;i+=1)
    {
        if(arr[i] === arr[i].split('').reverse().join(''))
        {
            res.push(arr[i]);
        }
    }
    return res;
}