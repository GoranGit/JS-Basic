/**
 *AniG loves sweet things, especially cakes. She also loves to spend money.
 AniG owns S leva and wants to spend as much of them as she can. She also has 3 favorite types of cakes. The first one costs C1 leva, the second one C2 leva and the third one C3 leva. In the shop there are infinite number of cakes but AniG has only S leva.
 AniG should spend as much as she can of his money to buy some cakes. Find the maximum amount of money (no more than S) that she can spend to buy cakes.
 Input
 The input data should be read from the console.
 On the first line there will be the number S.
 On the second, third and fourth line there will be the numbers C1, C2 and C3.
 The input data will always be valid and in the format described. There is no need to check it explicitly.
 Output
 The output should be printed on the console.
 Output the biggest possible amount that AniG can spend.

 */
var arr = ['20',
    '11',
    '200',
    '300'
]

solve(arr);

    function solve(params)
    {
        var s = parseFloat(params[0]);
        var c1 = parseFloat(params[1]);
        var c2 = parseFloat(params[2]);
        var c3 = parseFloat(params[3]);
        var max = Math.max();

        for(var i=0;i<=s/c1;i+=1)
        {
            for(var j=0;j<=(s-(i*c1))/c2;j+=1)
            {
                for(var k=0;k<=(s-(i*c1)-(j*c2))/c3;k+=1)
                {
                    var p = i*c1 + j*c2 + k*c3;
                    if( p> max)
                    {
                        max = p;
                    }
                }
            }
        }

        console.log(max);
    }