/**
 * Write a function that checks if a given object contains a given property.
 */

var obj = {
    lenght:30,
    something:'something'
}

console.log(hasProperty(obj,'something'));

function hasProperty(obj,prop)
{
    if(obj.hasOwnProperty(prop))
    {
        return true;
    }
    else
    {
        return false;
    }
}