/**
 * Write a function that makes a deep copy of an object.
 The function should work for both primitive and reference types.
 */

    // test objects
var person={
    name:'Pesho',
    surname:'Peshov',
    age:32,
    fullName:function(){
        return this.name+' '+this.surname;
    }
};

var anotherPerson=deepCopy(person);
person.age=22;
console.log('Person is ' + person.fullName() + ' age:' + person.age);
console.log('Another person is ' + anotherPerson.fullName() + ' age:' + anotherPerson.age);

console.log(deepCopy(5));


function deepCopy(obj) {
    if(obj === null || typeof(obj) !== 'object')
        return obj;

    var temp = {};

    for(var key in obj) {
        if(Object.prototype.hasOwnProperty.call(obj, key)) {
            temp[key] = deepCopy(obj[key]);
        }
    }
    return temp;
}