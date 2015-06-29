/**
 * Write functions for working with shapes in standard Planar coordinate system.
 Points are represented by coordinates P(X, Y)
 Lines are represented by two points, marking their beginning and ending L(P1(X1,Y1), P2(X2,Y2))
 Calculate the distance between two points.
 Check if three segment lines can form a triangle.
 */



var A = createPoint(0,0),
    B = createPoint(5,5),
    C = createPoint(3,3);
var line1 = createLine(A,B),
    line2 = createLine(B,C),
    line3 = createLine(C,A);


console.log('Distance from A to B is:' + getDistance(A,B));
console.log('Distance from B to C is:' + getDistance(B,C));
console.log('Distance from C to A is:' + getDistance(C,A));

console.log('Can you forme  triangle from line1-3? ' + checkForTriangle(line1,line2,line3));

 function createPoint(x,y)
{
    return {
        X:x,
        Y:y
    }
}
function createLine(pointA,pointB) {
   return{
        startPoint:pointA,
       endPoint:pointB
    }
}

function getDistance(startPoint,endPoint)
{
    return Math.sqrt(Math.pow(startPoint.X - endPoint.X,2)+ Math.pow(startPoint.Y - endPoint.Y,2));
}

function checkForTriangle(line1,line2,line3)
{
    var a = getDistance(line1.startPoint,line1.endPoint),
        b = getDistance(line2.startPoint,line2.endPoint),
        c = getDistance(line3.startPoint,line3.endPoint);
    if(a<b+c && b<c+a && c<b+a)
    {
        return 'YES';
    }
    else
    {
        return 'NO';
    }
}