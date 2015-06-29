/**
 * Write a script that finds the most frequent number in an array.
 */

    var arr = [4,4,5,3,6,2,3,3,3,3,3,2,4,4,4],
 i,
 numbers = [],
 times = [],
 pom,
 max = Math.max(),
 maxIndex;

for(i=0;i<arr.length;i+=1)
{
    pom = numbers.indexOf(arr[i],0);
    if(pom!==-1)
    {
        times[pom]+=1;
    }else
    {
        numbers.push(arr[i]);
        times[numbers.length-1] = 1;
    }
}

for(i=0;i<times.length;i+=1)
{
    if(times[i]>max)
    {
        max = times[i];
        maxIndex = i;
    }
}

console.log('number '+ numbers[maxIndex] + ' is repeated '+ max + ' times');

