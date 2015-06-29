/**
 * You are given a matrix of directions. The rows are zero-based. The possible directions are eight and follow the horse moves from the game chess. The directions are as follows:

 You should generate another matrix with the same size. The numbers in each row are consecutive and decreasing. The leftmost (first) number in each row is a power of 2, calculated with the formula 2row where row is the number of this row and each cell to the right on the same row is lesser with 1.
 Your task is to find the sum that can be found, using the given directions and summing the numbers in each cell you step into. If with the current direction, you step out of the matrix – print "Go go Horsy! Collected SUM weeds'", where SUM is the collected sum. If you step on a cell that you have previously stepped in – print "Sadly the horse is doomed in JUMPS jumps" where JUMPS is the number of cells passed.
 You start always at bottom-right cell (row-1, col-1).
 Create a function in JavaScript that solves this problem.

 */
args = [
    '3 5',
    '54361',
    '43326',
    '52188',
];


solve(args);

function solve(args) {
    var numOfRows = args[0].split(' ')[0] | 0;
    var numOfCols = args[0].split(' ')[1] | 0;

    var dirMatrix = [];

    var resMatrix = [];

    for (var i = 1, len = args.length; i < len; i += 1) {
        dirMatrix[i - 1] = args[i].split('');
    }

    for (var i = 0; i < numOfRows; i += 1) {
        resMatrix[i] = [];
        resMatrix[i][0] = Math.pow(2, i);

        for (var j = 1; j < numOfCols; j += 1) {
            resMatrix[i][j] = resMatrix[i][j - 1] - 1;
        }
    }

    var sum = 0;
    var i = numOfRows-1, j = numOfCols-1;
    var k = dirMatrix[i][j];
    var jumps = 0;
    while (k) {
        jumps+=1;
        sum += resMatrix[i][j];
        dirMatrix[i][j] = false;
        switch (k) {
            case '1':
                i -= 2;
                j += 1;
                break;
            case '2':
                i -= 1;
                j += 2;
                break;
            case '3':
                i += 1;
                j += 2;
                break;
            case '4':
                i += 2;
                j += 1;
                break;
            case '5':
                i += 2;
                j -= 1;
                break;
            case '6':
                i += 1;
                j -= 2;
                break;
            case '7':
                i -= 1;
                j -= 2;
                break;
            case '8':
                i -= 2;
                j -= 1;
                break;
        }

        k = i >= 0 && i < numOfRows && j >= 0 && j < numOfCols ? dirMatrix[i][j] : undefined;
    }

    if (k === undefined) {
        console.log('Go go Horsy! Collected '+sum+' weeds');
    }
    else {
        console.log('Sadly the horse is doomed in '+jumps+' jumps');
    }
}