/**
 * Created by Goran on 6/10/2015.
 */
function solve(params) {
    var N = parseInt(params[0]);
    var answer = 0;
    var flag= false;

    for(var i=1;i<=N;i+=1)
    {
        while(i+1<=N && (params[i+1]|0)>=(params[i]|0))
        {
            i+=1;
        }
            answer+=1;
    }
    return answer;
}

var arr = [
    '9',
    '1',
    '8',
    '8',
    '7',
    '6',
    '5',
    '7',
    '7',
    '6'

];
console.log(solve(arr));