// Graph / Grid BFS — Given a 2D grid with walls/free cells, 
// find shortest path from start to target (or count reachable cells within steps). 
// Or number of islands / connected components. 
// (Common interview question) (LeetCode)
// https://leetcode.com/problems/number-of-islands/
// https://leetcode.com/problems/shortest-path-in-binary-matrix/

// Graphs, grids, BFS
// JS
// JS
function bfsGrid(grid, startRow, startCol) {
    const rows = grid.length;
    const cols = grid[0].length;
    const visited = Array.from({ length: rows }, () => Array(cols).fill(false));
    const q = [];
    q.push([startRow, startCol, 0]); // row, col, dist
    visited[startRow][startCol] = true;
    const dirs = [[1,0],[-1,0],[0,1],[0,-1]];
    while (q.length > 0) {
        const [r, c, d] = q.shift();
        // process (r, c, d)
        for (const [dr, dc] of dirs) {
            const nr = r + dr, nc = c + dc;
            if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && !visited[nr][nc] && grid[nr][nc] === 0) {
                visited[nr][nc] = true;
                q.push([nr, nc, d + 1]);
            }
        }
    }
    // return appropriate result
}
// Example usage:
const grid1 = [
  [0,0,0,0],
  [1,1,0,1],
  [0,0,0,0],
  [0,1,1,0]
];
bfsGrid(grid1, 0, 0); // Start BFS from (0,0)       
// output: process each cell with its distance from start       

// JS — number of islands (connected components)
function numIslands(grid) {
    if (grid.length === 0) return 0;
    const rows = grid.length;
    const cols = grid[0].length;
    let count = 0;

    const directions = [[1,0],[-1,0],[0,1],[0,-1]];

    function bfs(r, c) {
        const queue = [[r, c]];
        grid[r][c] = '0'; // mark visited
        while (queue.length > 0) {
            const [x, y] = queue.shift();
            for (const [dx, dy] of directions) {
                const nx = x + dx;
                const ny = y + dy;
                if (0 <= nx && nx < rows && 0 <= ny && ny < cols && grid[nx][ny] === '1') {
                    grid[nx][ny] = '0'; // mark visited
                    queue.push([nx, ny]);
                }
            }
        }
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === '1') {
                count++;
                bfs(i, j);
            }
        }
    }
    return count;
}
// Example usage:
console.log(numIslands([
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
])); // Output: 3   
console.log(numIslands([
  ["1","1","1"],
  ["0","1","0"],
  ["1","1","1"]
])); // Output: 1   
