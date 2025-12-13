// Merge intervals / interval scheduling / meeting rooms — 
// Given list of time intervals, merge overlapping intervals, 
// or return if any overlap.
// https://leetcode.com/problems/merge-intervals/
// https://leetcode.com/problems/meeting-rooms/

// Arrays, sorting
// JS
// JS
function mergeIntervals(intervals) {
    if (!intervals.length) return [];
    intervals.sort((a,b) => a[0] - b[0]);
    const res = [];
    let [start, end] = intervals[0];
    for (let i = 1; i < intervals.length; i++) {
        const [s, e] = intervals[i];
        if (s <= end) {
            end = Math.max(end, e);
        } else {
            res.push([start, end]);
            start = s; end = e;
        }
    }
    res.push([start, end]);
    return res;
}
// Example usage:
console.log(mergeIntervals([[1,3],[2,6],[8,10],[15,18]])); // Output: [[1,6],[8,10],[15,18]]
console.log(mergeIntervals([[1,4],[4,5]]));               // Output: [[1,5]]    

// JS — merge intervals and meeting rooms
function mergeIntervals(intervals) {
    if (intervals.length === 0) return [];
    // Sort intervals by start time
    intervals.sort((a, b) => a[0] - b[0]);
    const merged = [];
    let currentInterval = intervals[0];

    for (let i = 1; i < intervals.length; i++) {
        const nextInterval = intervals[i];
        if (currentInterval[1] >= nextInterval[0]) {
            // Overlap, merge
            currentInterval[1] = Math.max(currentInterval[1], nextInterval[1]);
        } else {
            // No overlap, push current and move to next
            merged.push(currentInterval);
            currentInterval = nextInterval;
        }
    }
    merged.push(currentInterval); // Push the last interval
    return merged;      
}
// Example usage:
console.log(mergeIntervals([[1,3],[2,4],[5,7],[6,8]])); // Output: [[1,4],[5,8]]
console.log(mergeIntervals([[1,5],[6,10],[11,15]]));    // Output: [[1,5],[6,10],[11,15]]

// JS — meeting rooms (check for any overlap)
function canAttendMeetings(intervals) {
    // Sort intervals by start time
    intervals.sort((a, b) => a[0] - b[0]);
    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] < intervals[i - 1][1]) {
            return false; // Overlap detected
        }
    }
    return true; // No overlaps
}
// Example usage:
console.log(canAttendMeetings([[0,30],[5,10],[15,20]])); // Output: false
console.log(canAttendMeetings([[7,10],[2,4]]));        // Output: true

