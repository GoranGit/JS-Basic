/**
 * Write a script that parses an URL address given in the format: [protocol]://[server]/[resource] and extracts from it the [protocol], [server] and [resource] elements.
 Return the elements in a JSON object.
 */
var url ='http://telerikacademy.com/Courses/Courses/Details/239';

var json = {
    protocol: url.match(/(.+?):\/\//)[1],
    server: url.match(/:\/\/(\w+?\.\w{2,3})\//)[1],
    resource: url.match(/\.\w{2,3}([\w\/]*)/)[1]
}

console.log(json);