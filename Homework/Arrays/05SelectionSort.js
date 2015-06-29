/**
 * Sorting an array means to arrange its elements in increasing order.
 Write a script to sort an array.
 Use the selection sort algorithm: Find the smallest element, move it at the first position, find the smallest from the rest, move it at the second position, etc.
 */

//test variable
var arr = [1,4,2,5,3,6,7],
    i,
    j,
 iMin,
 result=[];

for (j = 0; j < arr.length-1; j++) {

    iMin = j;

    for ( i = j+1; i < arr.length; i++) {

        if (arr[i] < arr[iMin])
        {
            iMin = i;
        }
    }

    if(iMin != j) {

        var temp = arr[iMin];
        arr[iMin ] = arr[j];
        arr[j] = temp;
    }
}

for(i=0;i<arr.length;i+=1)
{
    console.log(arr[i]);
}