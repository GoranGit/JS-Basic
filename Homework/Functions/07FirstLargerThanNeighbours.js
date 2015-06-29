/**
 * Write a function that returns the index of the first element in array that is larger than its neighbours or -1, if there’s no such element.
 Use the function from the previous exercise.
 */

var arr = [2,3,4,3,2,5,3,4,2];

console.log(check(arr));

function check(arr)
{
    for(var i= 0, lenght = arr.length ;i<lenght;i++)
    {
        if(isBigger(i,arr))
        {
            return i;
        }
    }
    return -1;
}


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
        return false;
    }
}