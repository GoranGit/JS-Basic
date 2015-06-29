/**
 * Pesho is a lover of 3. He loves everything that is devisable by 3. He loves 3 so much, he created his own game with threes. Yet, Pesho is not a bright one, so he cannot calculate the result in his own game. The game is as follows:
 The game has a rectangular field. The field is filled with numbers devisable by 3 as follows:
 •	The bottom left corner holds the value 0
 •	The next cell above holds value of 3, the next cell above holds of 6, etc…
 •	The second cell the bottom row holds a value of 3, the cell next to it holds a value of 6
 You have a pawn on the field. The pawn can only move to the cells that are diagonally next to it. The possible directions are UP-RIGHT, DOWN-RIGHT, UP-LEFT and DOWN-LEFT.
 Given that initially the pawn starts at the bottom left corner, a list of directions and how many moves the pawn is about to perform in each direction, calculate the sum of the cells that the pawn has to go through.
 The value of each cell is calculated only once, i.e. if the pawn visits the same cell more than once, its value is added to the result only the first time (the value is collected).
 If the pawn is about to perform K moves in the given direction, but there are less than K cells before the edge of the field, the pawn performs as many moves as are available and stops at the edge of the field.

 */


function solve(params)
{
    var rows = params[0].split(' ')[0]|0;
    var cols = params[0].split(' ')[1]|0;
    var n = params[1]|0;
    var rowPos = rows-1;
    var colPos = 0;
    var matrix = [];
    var p = 0;
    var result = 0;
    var flag = false;
    var tempRowPos = rowPos;
    var tempColPos = colPos;

        for(var  i = rows-1;i>=0;i-=1)
        {
            for(var j=0;j<cols;j+=1)
            {
                if(j===0)
                {
                    matrix[i] = [];
                    matrix[i][j] = p;
                }else
                {
                    matrix[i][j] = matrix[i][j-1]+3;
                }
            }
            p+=3;
        }
    console.log(matrix);

  for(var i=0;i<n;i+=1)
  {
    var d = params[i+2].split(' ')[0];
      var k = params[i+2].split(' ')[1];
    flag = false;

      while(k!==0) {
          result += matrix[rowPos][colPos];
          matrix[rowPos][colPos] = 0;
          tempRowPos = rowPos;
          tempColPos = colPos;
          switch (true) {
              case (d==='RU' || d==='UR'):
                  rowPos -= 1;
                  colPos += 1;
                  break;
              case (d==='LU' || d==='UL'):
                  rowPos -= 1;
                  colPos -= 1;
                  break;
              case (d==='DR' || d==='RD'):
                  rowPos += 1;
                  colPos += 1;
                  break;
              case (d==='LD' || d==='DL'):
                  rowPos += 1;
                  colPos -= 1;
                  break;
          }
          switch (rowPos)
          {
              case -1:
                  flag = true;
                  break;
              case rows:
                  flag = true;
                  break;
          }
          switch (colPos)
          {
              case -1:
                  flag = true;
                  break;
              case  cols:
                  flag = true;
                  break;
          }

          if(flag)
          {
              rowPos = tempRowPos;
              colPos = tempColPos;
              break;
          }

          k-=1;
              }
  }
return result;
}

var arr = [
    '2 2',
    '10',
    'UR 2',
    'LD 100',
    'DR 500',
    'UL 500',
    'UL 5',
    'LD 120',
    'RD 123',
    'LU 321',
    'UR 2',
    'LD 100'
];

console.log(solve(arr));
