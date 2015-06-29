/**
 * Write a function to count the number of div elements on the web page
 */

//test variable
var html = '<div class="fullscreen-container js-suggester-container"> ' +
    '<div class="textarea-wrap"> <textarea name="fullscreen-contents" id="fullscreen-contents" class="fullscreen-contents js-fullscreen-contents" placeholder=""></textarea>' +
    ' <div class="suggester-container"> <div class="suggester fullscreen-suggester js-suggester js-navigation-container">' +
    '</div> </div> </div> </div>';

console.log(countOfDiv(html));

function countOfDiv(html)
{
    var result = 0;
    var div = '';
    for(var i of html)
    {
        div+=i;
switch (div)
{
    case '<':break;
    case '</':break; // </div> means end of div element, so we have  full div element!
    case '</d':break;
    case '</di':break;
    case '</div':break;
    case '</div>':result+=1;
                break;
    default :div = '';
}
    }
    return result;
}