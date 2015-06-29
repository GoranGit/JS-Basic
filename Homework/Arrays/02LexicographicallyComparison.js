/**
 * Created by Goran on 5/31/2015.
 */
//test variables
var charArray1 = ['a','b','d','c'],
 charArray2 = ['a','b','d','a'],
 lenMin = charArray1.length<charArray2.length?charArray1.length:charArray2.length,
 same = true;

if(lenMin === charArray1.length && lenMin === charArray2.length)
{
    for(var i=0;i<lenMin;i++)
    {
        if(charArray1[i]<charArray2[i])
        {
            console.log('First array is first!');
            same = false;
            break;
        }else
            if(charArray2[i]<charArray1[i])
            {
                console.log('Second array is first!');
                same = false;
                break;
            }
        else
            {
                continue;
            }
    }

    if(same)
    {
        console.log('First array and second array are same!');
    }
}else
{
    if(lenMin===charArray1.length)
    {
        console.log('First array is first!');
    }
    else
    {
        console.log('Second aray is second!');
    }
}