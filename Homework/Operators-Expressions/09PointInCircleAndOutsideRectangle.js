/**
 * Write an expression that checks for given point P(x, y) if it is within the circle K( (1,1), 3) and out of the rectangle R(top=1, left=-1, width=6, height=2)
 */
    //test variables
var x = -100;
var y = -100;


if(checkInCircle(x,y)&&outOfRec(x,y))
{
    console.log("yes");
}
else
{
    console.log("no");
}

function checkInCircle(x,y){
    return (Math.sqrt(Math.pow(x-1,2)+Math.pow(y-1,2))<=3);
}

function outOfRec(x,y)
{
    var k = (-2<=y&& y<=1);
    var p = (-1<=x&& x<=5);
    if(p && k)// in rectangle
    return false;
    else
    return true;
}