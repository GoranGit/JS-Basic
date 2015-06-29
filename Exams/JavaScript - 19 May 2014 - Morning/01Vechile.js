/**
 * Ivo and Niki were on a conference. Of course they arrived late for the conference. They had nothing to do and decided to count the number of wheels of all vehicles in the hotel parking. The number of all wheels were S. In the parking there were 3 types of vehicles:
 •	Cars with 4 wheels
 •	Trucks with 10 wheels
 •	Trikes with 3 wheels
 Niki and Ivo are not smart enough and managed to remember only the number of wheels, but not the number of vehicles („celata im rabota e takava“). Now they are wondering how many vehicles were there in the parking. No one can help them, but you can at least find the number of all possible combinations of cars, trucks and trikes with exactly S wheels.
 Input
 The input data should be read from the console.
 On the only input line there will be the number S.
 The input data will always be valid and in the format described. There is no need to check it explicitly.
 Output
 The output should be printed on the console.
 Output the number of all possible combinations of cars, trucks and trikes with exactly S wheels

 */

solve(['14']);

function solve(params)
{
    var s = params[0]|0;
    var count = 0;
    var rest;
    var rest2;
    for(var i =0;i<=(s/4)|0;i+=1)
    {
        rest = ((s-(i*4))/10)|0;
        for(var j=0;j<=rest;j+=1)
        {
            rest2 = ((s-(i*4)-(j*10))/3)|0;
            for(var k=0;k<=rest2;k+=1)
            {
                if((i*4 + j*10 + k*3)===s)
                {
                    count+=1;
                }
            }

        }
    }
    console.log(count);

}