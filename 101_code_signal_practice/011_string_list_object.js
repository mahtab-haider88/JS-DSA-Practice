// Your task is to create a JavaScript function named analyzeCompetition(). 
// This function will take a string of logs as input and 
// output a list of arrays, each representing a student's ID, score, the number of successful attempts, 
// and the total fail penalties, in that order. 
// The arrays must be sorted in decreasing order of their 
// respective students' scores. 
// Students with zero solved problems should not be included in the output.

// For example, given logs like: 
// "1 solve 50, 2 solve 60, 1 fail, 3 solve 40, 2 fail, 3 solve 70", 
// your function should return: 
// [[3, 110, 2, 0], [2, 60, 1, 1], [1, 50, 1, 1]].

// Each log entry is separated by a comma and a space, 
// and they are sorted chronologically.

function analyzeCompetition(logs) {
    const studentData = {};
    
    const logEntries = logs.split(', ');
    for (const entry of logEntries) {
        console.log('Processing entry: ', entry);
        const [idStr, action, scoreStr] = entry.split(' ');
        const id = parseInt(idStr);
        const score = action === 'solve' ? parseInt(scoreStr) : 0;

        if (!studentData[id]) {
            studentData[id] = { score: 0, solves: 0, fails: 0 };
        }

        if (action === 'solve') {
            studentData[id].score += score;
            studentData[id].solves += 1;
        } else if (action === 'fail') {
            studentData[id].fails += 1;
        }
    }

    const result = [];
    for (const id in studentData) {
        const data = studentData[id];
        if (data.solves > 0) {
            result.push([parseInt(id), data.score, data.solves, data.fails]);
        }
    }
    console.log('Unsorted result: ', result);

    result.sort((a, b) => b[1] - a[1]);

    return result;
}

// Example usage:
let logs = "1 solve 50, 2 solve 60, 1 fail, 3 solve 40, 2 fail, 3 solve 70";

// Expected output: [[3, 110, 2, 0], [2, 60, 1, 1], [1, 50, 1, 1]]
console.log(analyzeCompetition(logs));