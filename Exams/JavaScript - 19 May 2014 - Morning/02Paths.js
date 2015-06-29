/**
 * You are given a matrix of directions. The rows are zero-based. The possible directions are four:
 •	"dr" stands for "down-right" direction
 •	"ur" stands for "up-right" direction
 •	"ul" stands for "up-left" direction
 •	"dl" stands for "down-left" direction
 You should generate another matrix with the same size. The numbers in each row are consecutive. The leftmost (first) number in each row is a power of 2, calculated with the formula 2row where row is the number of this row.
 Your task is to find the sum that can be found, using the given directions and summing the numbers in each cell you step into. If with the current direction, you step out of the matrix – print "successed with SUM", where sum is the calculated sum. If you step on a cell, that you have previously stepped in – print "failed at POSITION", where POSITION is the position of the previously visited cell.
 You start always at position (0, 0) – row = 0, column = 0.
 Create a function in JavaScript that solves this problem.

 */

solve([
        '3 5',
        'dr dl dl ur ul',
        'dr dr ul ul ur',
        'dl dr ur dl ur'
    ]
);
function solve(args) {
    var numOfRows = args[0].split(' ')[0] | 0;
    var numOfCols = args[0].split(' ')[1] | 0;

    var dirMatrix = [];

    var resMatrix = [];

    for (var i = 1, len = args.length; i < len; i += 1) {
        dirMatrix[i - 1] = args[i].split(' ');
    }

    for (var i = 0; i < numOfRows; i += 1) {
        resMatrix[i] = [];
        resMatrix[i][0] = Math.pow(2, i);

        for (var j = 1; j < numOfCols; j += 1) {
                resMatrix[i][j] = resMatrix[i][j - 1] + 1;
            }
        }

    var sum = 0;
    var i = 0, j = 0;
    var k = dirMatrix[i][j];

    while (k) {
        sum += resMatrix[i][j];
        dirMatrix[i][j] = false;
        switch (k) {
            case 'dr':
                i += 1;
                j += 1;
                break;
            case 'dl':
                i += 1;
                j -= 1;
                break;
            case 'ur':
                i -= 1;
                j += 1;
                break;
            case 'ul':
                i -= 1;
                j -= 1;
                break;
        }

        k = i >= 0 && i < numOfRows && j >= 0 && j < numOfCols ? dirMatrix[i][j] : undefined;
    }

    if (k === undefined) {
        console.log('successed with ' + sum);
    }
    else {
        console.log('failed at (' + i + ', ' + j + ')');
    }
}