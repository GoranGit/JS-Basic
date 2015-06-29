/**
 *You are given a rectangular field of size NxM, filled with numbers and directions. On each cell on the field there will be a direction marked with the letters l, r, u, d.
 By given position (R, C) (Rth row and Cth column) the directions are as follows:
 From (R, C) go l => (R, C-1)
 From (R, C) go r => (R, C+1)
 From (R, C) go u => (R-1, C)
 From (R, C) go d => (R+1, C)
 The numbers in the field are always as follows:
 On the first row the values are from 1 to M, on the second row – from M+1 to 2*M, on the third row – from 2*M +1 to 3*M, on the Nth row – from (N-1)*M to N*M.
 By given start position, find the path outside of the field, or print if you are lost.

 */

function solve(params)
{
    var rows = params[0].split(' ')[0]|0;
    var cols  = params[0].split(' ')[1]|0;
    var posRow = params[1].split(' ')[0]|0;
    var posCol = params[1].split(' ')[1]|0;
    var numArr = [];
    var dirArr = [];
    var k = 1;
    for(var i=2;i<rows+2;i+=1)
    {
        dirArr[i-2] = params[i].split('');
    }

    for(var i=0;i<rows;i+=1)
    {
        numArr[i]=[];
        for(var j=0;j<cols;j+=1)
        {
            numArr[i][j] =  k;
            k+=1;
        }
    }

    var sum = 0;
    var jumps = 0;
    var flag = false;
    while(numArr[posRow][posCol])
    {
        jumps+=1;
        sum+=numArr[posRow][posCol];
        numArr[posRow][posCol] = false;

        switch (dirArr[posRow][posCol])
        {
            case 'l':posCol-=1;break;
            case 'r':posCol+=1;break;
            case 'u':posRow-=1;break;
            case 'd':posRow+=1;break;
        }

        if(posRow<0||posRow>=rows || posCol<0||posCol>=cols)
        {
           flag = true;
            break;
        }
    }

    if(flag)
    {
        console.log('out '+ sum);
    }else
    if(!numArr[posRow][posCol])
    {
        console.log('lost '+jumps);
    }

}

args =[
    "5 8",
    "0 0",
    "rrrrrrrd",
    "rludulrd",
    "lurlddud",
    "urrrldud",
    "ulllllll"];
solve(args);
