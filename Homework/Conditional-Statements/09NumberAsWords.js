/**
 * Write a script that converts a number in the range [0…999] to words, corresponding to its English pronunciation.
 * solved with switch an if statement
 */
//test variable
var number = 9;

if(number===0)
{
    console.log("zero");
}
else
{
    if(!(number % 100))
    {
        console.log(getFrom1To9((number/100)|0) + " hundred");
    }
    else
    {
        if(!(number % 10))
        {
            if(((number/10)|0)>10)
            {
                console.log(getFrom1To9((number/100)|0)+" hundred and "+getTens(((number/10)|0)%10));
            }
            else
            {
            console.log(getTens(((number/10)|0)%10));
            }
        }
        else
        {
            switch (true)
            {
                case number>0 && number<10:console.log(getFrom1To9(number));break;
                case number>9 && number<20: console.log(getFrom10To19(number));break;
                case number>19 && number<100: console.log(getTens((number/10)|0) + " " + getFrom1To9(number%10));break;
                case number>99 && number<1000: console.log(getFrom1To9((number/100)|0) + " hundred and "+ getTens(((number/10)|0)%10) + " " + getFrom1To9(number%10));break;
                default: console.log("number not in range [0-999]");break;
            }

        }
    }

}



function getFrom10To19(numberrr)
{
    switch (numberrr)
    {
    case 10:return "ten"; break;
    case 11:return "eleven";break;
    case 12: return "twelve";break;
    case 13: return "thirteen";break;
    case 14: return "fourteen";break;
    case 15: return "fiveteen";break;
    case 16: return "sixteen";break;
    case 17: return "seventeen";break;
    case 18: return "eighteen";break;
    case 19: return "nineteen";break;

    }
}

function getTens(numberr)
{
    switch (numberr)
    {
        case 2:return "twenty";break;
        case 3:return "thirty";break;
        case 4:return "fourthy";break;
        case 5:return "fifty";break;
        case 6:return "sixty";break;
        case 7:return "seventy";break;
        case 8:return "eighty";break;
        case 9: return "ninety";break;
        default :return "not a digit";break;
    }
}
function getFrom1To9(numberrrr)
{
    switch (numberrrr)
    {
case 1: return "one"; break;
case 2: return "two"; break;
case 3: return "three";break;
case 4: return "four";break;
case 5: return "five"; break;
case 6: return "six" ;break;
case 7: return "seven" ;break;
case 8: return "eight"; break;
case 9: return "nine"; break;
default : return "not a digit";break;
    }
}