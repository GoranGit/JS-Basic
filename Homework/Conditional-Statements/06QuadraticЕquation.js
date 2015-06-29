/**
 Write a script that reads the coefficients a, b and c of a quadratic equation ax2 + bx + c = 0 and solves it (prints its real roots).
 Calculates and prints its real roots.
 Note: Quadratic equations may have 0, 1 or 2 real roots.
 */
//test variables
var a =5;
var b=2;
var c=8;

var x1 = ((-b)-Math.sqrt(Math.pow(b,2)-(4*a*c)))/(2*a);
var x2 = ((-b)+Math.sqrt(Math.pow(b,2)-(4*a*c)))/(2*a);

switch (true)
{
    case (x1!==x2)&& !isNaN(x1): console.log("x1="+x1+"; x2="+x2);break;
    case x1===x2: console.log("x1=x2="+x1);break;
    default:console.log("no real roots!");break;
}