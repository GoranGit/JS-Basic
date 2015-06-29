/**
 * You are given an integer array arr, consisting of N integers. Find the maximum possible sum of consecutive numbers in arr. For example: if the array arr consists of the numbers 1, 6, -9, 4, 4, -2, 10, -1, the maximum possible sum of consecutive numbers is 16 (the consecutive numbers are 4, 4, -2 and 10)
 Your task is to write a JavaScript method named “Solve” that solves the problem.
 */

function solve(params)
{
    var n = parseInt(params[0]);
    var result = Math.max();
    var tempSum;
    for(var i=1;i<=n;i+=1)
    {
        tempSum = parseInt(params[i]);
        if(tempSum>result)
        {
            result = tempSum;
        }
        for(var j=i+1;j<=n;j+=1)
        {
            tempSum+=parseInt(params[j]);
            if(tempSum>result)
            {
                result = tempSum;
            }
        }

    }
    return result;
}

var arr = [
    '4',
    '-5',
    '-1',
    '-7',
    '-6'


];
solve(arr);