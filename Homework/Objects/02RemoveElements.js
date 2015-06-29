/**
 * Write a function that removes all elements with a given value.
 Attach it to the array type.
 Read about prototype and how to attach methods.

 var arr = [1,2,1,4,1,3,4,1,111,3,2,1,'1'];
 arr.remove(1); //arr = [2,4,3,4,111,3,2,'1'];
 */

Array.prototype.remove = function(elementVal){

    //while(this.indexOf(elementVal)!==-1)
    var len = this.length;
   for(var i =0;i<len;i+=1)
    {
        if(this[i]===elementVal)
        {
            this.splice(i,1);
            i-=1;
        }
    }
}
//test variables
var arr = [1,1,1,2,2,2,2,1,1,1,1,1,1];
arr.remove(1);

console.log(arr);
