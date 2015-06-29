/**
 * Write a function that creates a HTML <ul> using a template for every HTML <li>.
 The source of the list should be an array of elements.
 Replace all placeholders marked with –{…}– with the value of the corresponding property of the object.
 */

var people = [{name: 'Peter', age: 14},{name: 'Gosho',age: 15},{name: 'Pesho', age: 16}];
var tmpl = '<div data-type="template" id="list-item"><strong>-{name}-</strong> <span>-{age}-</span> </div>';
var peopleList = generateList(people, tmpl);

console.log(peopleList);

function generateList(people,template)
{
    var result = '<ul>';
    var temp ;
    var reg;
    for(var i= 0, len = people.length ;i<len;i+=1)
    {
        temp = template;
        result += '<li>';
        for(var prop in people[i]) {

            reg = new RegExp('-{'+prop+'\}-','g');
            temp = temp.replace(reg,people[i][prop]);
        }
        result+=temp+'</li>';
    }
    result+='</ul>';
    return result;
}