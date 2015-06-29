/**
 * Created by Goran on 6/11/2015.
 */

    function solve(params) {
        var squareIndexses = {};
        var rows = parseInt(params[0]),
            cols = parseInt(params[1]),
            tests = parseInt(params[rows + 2]),
            knightMoves = [[-2, 1], [-1, 2], [1, 2], [2, 1],
                [2, -1], [1, -2], [-1, -2], [-2, -1]], i, move;

        var playBoard = [];

        for(var i =2;i<rows+2;i+=1)
        {
            playBoard[i-2] = params[i].split('');
        }


    //getSquareIndexes(squareIndexses,'a3 a3',rows);


       // console.log(squareIndexses);
         //   console.log(playBoard);



        for (i = 0; i < tests; i+=1) {
            move = params[rows + 3 + i];
            // Your solution here

            getSquareIndexes(squareIndexses,move,rows);

            if(playBoard[squareIndexses.FromRows][squareIndexses.FromCols]==='K')
            {
                    var succes = false;
                    for(var l=0;l<knightMoves.length;l+=1)
                    {
                        if(squareIndexses.ToRows === squareIndexses.FromRows + knightMoves[l][0] && squareIndexses.ToCols === squareIndexses.FromCols + knightMoves[l][1])
                        {
                            succes = true;
                            if(playBoard[squareIndexses.ToRows][squareIndexses.ToCols]==='-')
                            {
                                console.log('yes');
                                continue;
                            }else
                            {
                                console.log('no');
                                continue;
                            }

                        }

                    }
                if(!succes)
                {
                    console.log('no');
                    continue;
                }

            }else
            if(playBoard[squareIndexses.FromRows][squareIndexses.FromCols]==='Q')
            {

                if(playBoard[squareIndexses.ToRows][squareIndexses.ToCols]!=='-')
                {
                    console.log('no');
                    continue;
                }
                else
                {
                    if(squareIndexses.FromRows === squareIndexses.ToRows)
                    {
                        if(squareIndexses.ToCols>squareIndexses.FromCols)
                        {
                            var succeed = true;
                            for(var j = squareIndexses.FromCols+1;j<=squareIndexses.ToCols ;j+=1)
                            {
                                if(playBoard[squareIndexses.FromRows][j]!=='-')
                                {
                                    succeed = false;
                                }
                            }
                            if(succeed)
                            {
                                console.log('yes');
                                continue;
                            }else
                            {
                                console.log('no');
                                continue;
                            }
                        }else
                        if(squareIndexses.ToCols<squareIndexses.FromCols)
                        {
                            var succeed = true;
                            for(var j = squareIndexses.FromCols-1;j>=squareIndexses.ToCols ;j-=1)
                            {
                                if(playBoard[squareIndexses.FromRows][j]!=='-')
                                {
                                    succeed = false;
                                }
                            }
                            if(succeed)
                            {
                                console.log('yes');
                                continue;
                            }else
                            {
                                console.log('no');
                                continue;
                            }
                        }
                        else
                        {
                            console.log('no');
                            continue;
                        }
                    }
                    else
                    {
                        if(squareIndexses.FromCols === squareIndexses.ToCols)
                        {
                            if(squareIndexses.ToRows>squareIndexses.FromRows)
                            {
                                var succeed = true;
                                for(var j = squareIndexses.FromRows+1;j<=squareIndexses.ToRows ;j+=1)
                                {
                                    if(playBoard[j][squareIndexses.ToCols]!=='-')
                                    {
                                        succeed = false;
                                    }
                                }
                                if(succeed)
                                {
                                    console.log('yes');
                                    continue;
                                }else
                                {
                                    console.log('no');
                                    continue;
                                }
                            }else
                            {
                                if(squareIndexses.ToRows<squareIndexses.FromRows)
                                {
                                    {
                                        var succeed = true;
                                        for(var j = squareIndexses.FromRows-1;j>=squareIndexses.ToRows ;j-=1)
                                        {
                                            if(playBoard[j][squareIndexses.ToCols]!=='-')
                                            {
                                                succeed = false;
                                            }
                                        }
                                        if(succeed)
                                        {
                                            console.log('yes');
                                            continue;
                                        }else
                                        {
                                            console.log('no');
                                            continue;
                                        }
                                    }

                                }
                                else
                                {
                                    console.log('no');
                                    continue;
                                }
                            }
                        }
                        else
                        {
                            var x,y;
                            x = squareIndexses.ToRows -squareIndexses.FromRows;
                            y = squareIndexses.ToCols - squareIndexses.FromCols;


                            if(x===y)
                            {
                                console.log('yes');
                                continue;
                            }

                            else
                            {
                                console.log('no');
                                continue;
                            }


                            console.log('no');
                            continue;
                        }
                    }
                }
            }else
            {


                console.log('no');
                continue;
            }
           // console.log('yes'); // or console.log('no');
        }



        function getSquareIndexes(model,str,rows)
        {
            var char = str.split('')[0];
            var num = str.split('')[1]|0;
            var char2 = str.split('')[3];
            var num2 = str.split('')[4]|0;

            model.FromRows = rows -num;
            model.FromCols = char.charCodeAt() - 97;

            model.ToRows = rows - num2;
            model.ToCols = char2.charCodeAt() - 97;
        }
    }


var arr  = [
    '3',
    '4',
    '--K-',
    'K--K',
    'Q--Q',
    '12',
    'd1 b3',
    'a1 a3',
    'c3 b2',
    'a1 c1',
    'a1 b2',
    'a1 c3',
    'a2 c1',
    'd2 b1',
    'b1 b2',
    'c3 a3',
    'a2 a3',
    'd1 d3'

];

console.log(solve(arr));