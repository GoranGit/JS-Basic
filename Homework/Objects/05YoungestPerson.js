/**
 * Write a function that finds the youngest person in a given array of people and prints his/hers full name
 Each person has properties firstname, lastname and age.
 */

//test variables
var people = [
    { firstname : 'Gosho', lastname: 'Petrov', age: 32 },
    { firstname : 'Bay', lastname: 'Ivan', age: 81},
    { firstname : 'Pesho', lastname: 'Peshov', age:5}];

console.log(findYoungest(people));

function findYoungest(arr)
{
    var min = Math.min();
    var firstName,lastName;
    for(var i = 0, lenght = arr.length;i<lenght;i+=1)
    {
        if(arr[i].age<min)
        {
            firstName = arr[i].firstname;
            lastName = arr[i].lastname;
            min = arr[i].age;
        }
    }
    return firstName + ' ' + lastName;
}