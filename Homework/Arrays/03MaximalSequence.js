/**
 * Write a script that finds the maximal sequence of equal elements in an array.
 */

var arr = [1,2,3,4,5,5,5,53,3,2],

 counter = 1,
 element=arr[0],
 max=1;

if(arr.length===1)
{
    console.log(arr[0]);
}
else
{
    for(var i = 0;i<arr.length;i+=1)
    {
        while(i+1<arr.length && arr[i]===arr[i+1] )
        {
            counter+=1;
            i+=1;
        }
        if(counter>max)
        {
            max = counter;
            element = arr[i];
        }
        counter = 1;
    }

    for(var k = 0;k<max;k+=1)
    {
        console.log(element);
    }
}
