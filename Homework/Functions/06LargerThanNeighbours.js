/**
 * Write a function that checks if the element at given position in given array of integers is bigger than its two neighbours (when such exist).
 */
    // test variables
var arr = [2,3,4,3,2,5,3,4,2],
    elementAt =5;

console.log(isBigger(elementAt,arr));

function isBigger(elementAt,arr)
{

    if(elementAt+1<arr.length && elementAt-1>=0)
    {
        if(arr[elementAt]>arr[elementAt+1] && arr[elementAt]>arr[elementAt-1])
        {
            return true;
        }
        else
        {
            return false;
        }
    }
    else
    {
        return 'this element has no two neighbours!';
    }

}
