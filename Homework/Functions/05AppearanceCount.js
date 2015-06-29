/**
 * Write a function that counts how many times given number appears in given array.
 Write a test function to check if the function is working correctly.
 */


console.log(test());

function test()
{
    return countNumber(5,[5,4,3,4,5,6,2,5]);
}

function countNumber(number,arr)
{
    var counter =0;
    var lenght = arr.length;
    for(var i=0;i<lenght;i+=1)
    {
        if(arr[i]==number)
        {
            counter+=1;
        }
    }
    return counter;
}