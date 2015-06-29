/**
 * You are given a text. Write a function that changes the text in all regions:
 */
//test variable
var text = "<upcase>We are</upcase><mixcase>living</mixcase> in a <upcase>yellow <lowcase>GO<mixcase>lalalalla</mixcase>RAN</lowcase> submarine</upcase>. We <mixcase>don't</mixcase> have <lowcase>anything</lowcase> else.<lowcase>WELL DONE! </lowcase>";

 var stack = [],
    indexStart = 0,
    indexEnd = 0,
    result = '';

for(var i = 0, len = text.length;i<len;i+=1)
{
    if(text[i]==='<')
    {
        indexEnd = i;
        result+=subStr(indexStart,indexEnd,text,stack);
        updateStack(i,text,stack);
        i = jumpTo(i,text);
        indexStart = i+1;
    }

    if(i===text.length-1 && stack.length===0 && text[i]!=='>')
    {
        result += text.substring(text.lastIndexOf('>',text.length-1)+1,text.length-1);
    }

}
console.log(result);

function subStr(start,end,text,stack) // return sub string that depend on command in stack(lowcase,upcase,mixcase)
{
    var subS;

    if(stack.length!==0)
    {
        var command =stack[stack.length-1];
        switch (true)
        {
            case command==='<u': subS = text.substring(start,end).toUpperCase();
                                    return subS;
                                    break;
            case command ==='<l': subS = text.substring(start,end).toLowerCase();
                                    return subS;
                                    break;
            case command ==='<m': {
                subS = '';
                for(var i = start;i<end;i+=1)
                {
                    var random =  Math.random();
                    if(random<0.5)
                    {
                        subS+=text[i].toUpperCase();
                    }else
                    {
                        subS+=text[i].toLowerCase();
                    }
                }
                return subS;
                break;
            }
        }
    }
    else
    {
        return text.substring(start,end);
    }
}

function updateStack(i,text,stack)
{
    var command = text[i] + text[i+1];
    switch (command)
    {
        case '</': stack.pop(); break;
        default : stack.push(command);break;
    }
    return stack;
}

function jumpTo(i,text)
{
   var jumpFor = text[i] + text[i+1] + text[i+2];

    switch (jumpFor)
    {
        case '<up': return i+7;break;
        case '<lo': return i+8; break;
        case '<mi': return i+8; break;
        case '</u': return i+8; break;
        case '</l': return i+9; break;
        case '</m': return i+9;break;
    }
}