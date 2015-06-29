/**
 * Write an expression that checks if given point P(x, y) is within a circle K({0,0}, 5). //{0,0} is the centre and 5 is the radius
 */
//test variables
var x = -5;
var y = 0;

var radius = 5;

checkInCircle(x,y,radius);

function checkInCircle(x,y,radius){
    console.log(Math.sqrt(Math.pow(x,2)+Math.pow(y,2))<=radius);
}