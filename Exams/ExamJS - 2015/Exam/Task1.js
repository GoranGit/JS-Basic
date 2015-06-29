/**
 * Created by Goran on 6/11/2015.
 */

function solve(params) {
    var s = params[0].split(' ').map(function(x){return parseFloat(x);}),
        result = 0;

    var dec = true;
    var inc = false;
        var maxCount = Math.max();
    var count = 0;


    // Your solution here


    var len  = s.length;
    for(var i=0;i<len;i+=1 )
    {
        count = 0;
        while(i+1<len && s[i+1]<s[i])
        {
            count+=1;
            i+=1;
        }
        while(i+1<len && s[i+1]>s[i])
        {
            count+=1;
            i+=1;


        }
        if(i!== len-1)
        i-=1;

        if(count>maxCount)
        {
            maxCount = count;
        }
    }


    console.log(maxCount);
}


var arr = [ '5 1 7 4 8'];

solve(arr);