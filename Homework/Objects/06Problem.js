/**
 * Write a function that groups an array of people by age, first or last name.
 The function must return an associative array, with keys - the groups, and values - arrays with people in this groups
 Use function overloading (i.e. just one function)
 */


var people  = [
    { firstname : 'Gosho', lastname: 'Petrov', age: 32 },
    { firstname : 'Bay', lastname: 'Ivan', age: 81},
    { firstname : 'Ale', lastname: 'Peshova', age: 10},
    { firstname : 'Balan', lastname: 'Bababab', age:10 },
    { firstname : 'Gosho', lastname: 'Peshov,', age: 33 },
    { firstname : 'Gosho', lastname: 'Petrov', age: 32 }];

console.log(group(people,'age'));

function group(arr,groupBy)
{
    var groups = {},
        len = arr.length;
    for(var i= 0;i< len;i+=1)
    {

        if(groups[arr[i][groupBy]] === undefined )
        {
            groups[arr[i][groupBy]] = [arr[i]];
        }
        else
        {
            groups[arr[i][groupBy]].push(arr[i]);
        }
    }
    return groups;
}