// Matrix “neighbor mean” / smoothing filter — 
// Given a 2D matrix, for each cell compute mean (or sum) of all neighbors 
// within given radius (8 directions). 
// Return new matrix. (Reported typical OA question) (LeetCode)
// https://leetcode.com/problems/image-smoother/

// 2D arrays, iteration

// JS
function neighborSumMatrix(mat) {
    const rows = mat.length;
    const cols = mat[0].length;
    const res = Array.from({ length: rows }, () => Array(cols).fill(0));
    const dirs = [ [-1, -1],[-1,0],[-1,1],[0,-1],[0,0],[0,1],[1,-1],[1,0],[1,1] ];
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            let sum = 0;
            for (const [dx, dy] of dirs) {
                const x = i + dx, y = j + dy;
                if (0 <= x && x < rows && 0 <= y && y < cols) {
                    sum += mat[x][y];
                }
            }
            res[i][j] = sum;
        }
    }
    return res;
}
// Example usage:
console.log(neighborSumMatrix([[1,2,3],[4,5,6],[7,8,9]]));
// Output: [[12,21,16],[27,45,33],[24,39,28]]

// JS — generalized radius r
function matrixNeighborMean(mat, r) {
    const rows = mat.length;
    const cols = mat[0].length;
    const result = Array.from({ length: rows }, () => Array(cols).fill(0));

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            let sum = 0;
            let count = 0;
            for (let x = Math.max(0, i - r); x <= Math.min(rows - 1, i + r); x++) {
                for (let y = Math.max(0, j - r); y <= Math.min(cols - 1, j + r); y++) {
                    sum += mat[x][y];
                    count++;
                }
            }
            result[i][j] = Math.floor(sum / count);
        }
    }
    return result;
}
// Example usage:
console.log(matrixNeighborMean([[1,1,1],[1,0,1],[1,1,1]], 1));
// Output: [[0,0,0],[0,0,0],[0,0,0]]
console.log(matrixNeighborMean([[100,200,100],[200,50,200],[100,200,100]], 1));
// Output: [[137,141,137],[141,138,141],[137,141,137]]