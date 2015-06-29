/**
 * Write an expression that checks if given positive integer number n (n ? 100) is prime.
 */
//test variables
var number = 23;
console.log(isPrime(number));

function isPrime(number)
{
    if(number<2)
    return false;

    var checkToNumber = Math.sqrt(number)|0 ;

    for(var i=2;i<=checkToNumber;i++)
    {
        if(!(number%i)){
            return false;
        }
    }
    return true;
}