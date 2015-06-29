/**
 * Write a script that finds the index of given element in a sorted array of integers by using the binary search algorithm.
 */
//test variables
var arr = [1,2,3,4,5,6,7,8,9],
 numberToFind = 5,
 fromIndex = 0,
 toIndex = 8;

console.log(binarySearch(arr,numberToFind,fromIndex,toIndex));

function binarySearch(arr,number,min,max)
{
    if (max < min)
    {
        return -1;
    }

    var midle = (arr.length/2)|0;

    if (arr[midle] > number)

        return binarySearch(arr, number,min, midle - 1);
    else if (arr[midle] < number)

        return binarySearch(arr, number, midle + 1, max);
    else

        return midle;
}
