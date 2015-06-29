/**
 * Created by Goran on 6/6/2015.
 */

function solve(params)
{
    var n = params[0]|0;
    var model = {};
    var m,key,val,splited=[],templates = {},result='';
    var condition  = false;
    var repeatArr = [];
    var repeatStartLine;
    var item;


    var iff = false,free=true,repeat=false;

    for(var i= 1;i<=n;i+=1)
    {
        splited  = params[i].split('-');
        key = splited[0];
        val = splited[1];
        if(val.indexOf(';')!==-1)
        {
            model[key] = [];
            val = val.split(';');
        }
        else{
           val = val==='true'?true:val==='false'?false:val;
        }
        model[key]= val;
    }

    m = params[n+1]|0;
    var tempIndex;
    var tempEndIndex;

    var len = params.length;
    for(var i=n+2;i<len;i+=1)
    {
        i;
        tempIndex = params[i].indexOf('nk-template name',0);

            while (tempIndex !== -1) {

                var startIndexOfName = params[i].indexOf('"',0) + 1;
                var endIndexOfName = params[i].indexOf('"',startIndexOfName);
                var name = params[i].substring(startIndexOfName, endIndexOfName);
                var context = '';
                i += 1;
                while (params[i] !== '</nk-template>') {
                    context += params[i] + '\n';
                    i += 1;
                }

                templates[name] = context;
                i += 1;
                tempIndex = params[i].indexOf('nk-template name',0);
            }
        if(free)
        {
            var line  = params[i];
            var contai = contains(line,'{{',0);
            if(contai)
            {
                result+=line.substring(0,line.indexOf('{{',0)) + line.substring(contai,line.indexOf('}}',contai+1)) + line.substring(line.indexOf('}}',contai+1)+2,line.lenght) + '\n';
            }
           else
            {
                contai = contains(line,'<nk-model>',0);
                if(contai)
                {
                    var title = line.substring(contai,line.indexOf('</nk-model>',contai+1));
                    result+=line.substring(0,contai-10) + model[title] + line.substring(line.indexOf('</nk-model>',contai+1)+11,line.length)+'\n';
                }else
                {
                    contai = contains(line,'<nk-template render="',0);
                    if(contai)
                    {
                        var name= line.substring(contai,line.indexOf('"',contai+1));
                        result+=templates[name];
                    }else
                    {
                        contai = contains(line,'<nk-if condition="',0);
                        if(contai)
                        {
                            condition = line.substring(contai,line.indexOf('"',contai+1));
                            iff = true;
                            free = false;
                            continue;
                        }else
                        {
                            contai = contains(line,'<nk-repeat for="',0);
                            if(contai)
                            {
                                var indexArr = contains(line,' in ',0);
                                repeatArr =model[line.substring(indexArr,line.indexOf('"',indexArr+1))];
                                item = line.substring(contai,line.indexOf(' in ',contai+1));
                                repeatStartLine = i+1;
                                model[item] = repeatArr.shift();
                                repeat = true;
                                free = false;
                            }
                            else
                            {

                                    if(line===''||line==='\n'||line===' ')
                                        result+='\n';
                                    else
                                        result+=line+'\n';

                            }
                        }
                    }
                }
            }
        }else
        if(iff)
        {
            var line  = params[i];
            if(model[condition])
            {

                var contai = contains(line,'{{',0);
                if(contai)
                {
                    result+=line.substring(0,line.indexOf('{{',0)) + line.substring(contai,line.indexOf('}}',contai+1)) + line.substring(line.indexOf('}}',contai+1)+2,line.lenght) + '\n';

                }
                else
                {
                    contai = contains(line,'<nk-model>',0);
                    if(contai)
                    {
                        var title = line.substring(contai,line.indexOf('</nk-model>',contai+1));
                        result+=line.substring(0,contai-10) + model[title] + line.substring(line.indexOf('</nk-model>',contai+1)+11,line.length)+'\n';
                    }else
                    {
                        contai = contains(line,'<nk-template render="',0);
                        if(contai)
                        {
                            var name= line.substring(contai,line.indexOf('"',contai+1));
                            result+=templates[name];
                        }else
                        {
                           contai = contains(line,'</nk-if>',0);
                            if(contai)
                            {
                                free = true;
                                iff = false;
                            }else
                            {
                                if(line===''||line==='\n'||line===' ')
                                    result+='\n';
                                else
                                    result+=line+'\n';
                            }
                        }

                        }
                    }
            }else
            {
               var contai = contains(line,'</nk-if>',0);
                if(contai)
                {
                    free = true;
                    iff = false;
                }
            }
        }
        else
        if(repeat)
        {

            var line  = params[i];
            var contai = contains(line,'{{',0);
            if(contai)
            {
                result+=line.substring(0,line.indexOf('{{',0)) + line.substring(contai,line.indexOf('}}',contai+1)) + line.substring(line.indexOf('}}',contai+1)+2,line.lenght) + '\n';
            }
            else
            {
                contai = contains(line,'<nk-model>',0);
                if(contai)
                {
                    var title = line.substring(contai,line.indexOf('</nk-model>',contai+1));
                    result+=line.substring(0,contai-10) + model[title] + line.substring(line.indexOf('</nk-model>',contai+1)+11,line.length)+'\n';
                }else
                {
                    contai = contains(line,'<nk-template render="',0);
                    if(contai)
                    {
                        var name= line.substring(contai,line.indexOf('"',contai+1));
                        result+=templates[name];
                    }else
                    {
                        contai = contains(line,'</nk-repeat>',0);
                        if(contai) {
                            if (repeatArr.length > 0) {
                                model[item] = repeatArr.shift();
                                i = repeatStartLine - 1;
                            }else
                            {
                            free = true;
                            repeat = false;
                             }
                        }else
                        {
                            if(line===''||line==='\n'||line===' ')
                                result+='\n';
                            else
                                result+=line+'\n';
                        }
                    }

                }
            }


        }



    }

        function contains(str,subStr,startIndex)//return false if not contains or index after the  sub string
        {
            if(str.indexOf(subStr,startIndex)===-1)
            {
                return false;
            }else

                return str.indexOf(subStr,startIndex)+subStr.length;
        }
console.log(result);
}

var arrr =
    ['0',
'15',
'<div>',
'<p>',
'{{<nk-if condition="pesho">}}',
'{{escaped}} dude',
'</p>',
'<p>',
'{{<nk-template render="pesho">}}',
'</p>',
'<p>',
'{{<nk-repeat for="pesho in peshos">}}',
'{{escaped}} in comment',
'</p>',
'</div>'
];
var arr = ['6',
    'title-Telerik Academy',
    'showSubtitle-true',
    'subTitle-Free training',
    'showMarks-false',
    'marks-3;4;5;6',
'students-Ivan;Gosho;Pesho',
'41',
    '<nk-template name="menu">',
    '<ul id="menu">',
    '<li>Home</li>',
    '<li>About us</li>',
'</ul>',
'</nk-template>',
'<nk-template name="footer">',
    '<footer>',
    'Copyright Telerik Academy 2014',
'</footer>',
'</nk-template>',
'<!DOCTYPE html>',
'<html>',
'<head>',
'<title>Telerik Academy</title>',
'</head>',
'<body>',
'<nk-template render="menu" />',
   '<h1><nk-model>title</nk-model></h1>',
'<nk-if condition="showSubtitle">',
 '<h2><nk-model>subTitle</nk-model></h2>',
'<div>{{<nk-model>subTitle</nk-model>}} ;)</div>',
    '</nk-if>',
'',
'<ul>',
'<nk-repeat for="student in students">',
    '<li>',
    '<nk-model>student</nk-model>',
    '</li>',
    '<li>Multiline <nk-model>title</nk-model></li>',
'</nk-repeat>',
'</ul>',
'<nk-if condition="showMarks">',
    '<div>',
    '<nk-model>marks</nk-model>',
    '</div>',
    '</nk-if>',
    '',
'<nk-template render="footer" />',
    '</body>',
    '</html>'

];
solve(arrr);