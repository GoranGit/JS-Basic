/**
 * Write a script that finds the maximal increasing sequence in an array.
 */

// test array
var arr = [3,2,3,4,5,6,7,2,2,4,8,9,10],
 fromIndex,toIndex,
 tempCheck = arr[0],
 count = 1,
 maxCount = 1,
 result;

for(var i=1;i<arr.length;i+=1)
{
    if(tempCheck<arr[i])
    {
        count+=1; // faster than count++
    }else
    {
        if(count>maxCount)
        {
            toIndex = i;// exclusive
            fromIndex = toIndex - count;
            maxCount = count;
        }
        count = 1;
    }
    tempCheck = arr[i];
}

if(count>maxCount)
{
    toIndex = arr.length;
    fromIndex = toIndex - count;
}

result = arr.slice(fromIndex,toIndex);
for(var k=0;k<result.length;k++)
{
    console.log(result[k]);
}