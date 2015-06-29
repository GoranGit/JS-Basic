/**Problem 1. JavaScript literal
 Assign all the possible JavaScript literals to different variables.

 Problem 3. Typeof variables
 * Try typeof on all variables you created**/

var int = 1;
var float = 1.532;
var string = "Hello World!";
var bool = true;
var undef = undefined;
var nullvar = null;
var nan = NaN;
var array = [1,2,3,4,5,6,7,8,9];
var object = {a:5,b:3};
var func = function(){
    console.log("This is function printed text!");
}


var a = [int,float,string,bool,undef,nullvar,nan,array,object, func ];
for(var l of a)
{
    console.log(typeof(l)+"="+l);
}