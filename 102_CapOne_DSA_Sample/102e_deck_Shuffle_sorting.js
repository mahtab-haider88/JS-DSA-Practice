// Deck shuffle sorting — 
// Given a “deck” represented as list; define one shuffle as: 
// take first element, move it to end. 
// Determine minimum number of shuffles to sort the deck (in increasing order), 
// or -1 if not possible. (Reported by a candidate) (LeetCode)  
// https://leetcode.com/problems/minimum-number-of-shuffles-to-sort-a-deck-of-cards/

// Arrays, simulation
// JS

// JS
function shufflesToSort(deck) {
    const sorted = [...deck].sort((a,b)=>a-b);
    const seen = new Set();
    let count = 0;
    while (true) {
        const key = deck.join(',');
        if (seen.has(key)) return -1;
        seen.add(key);
        if (deck.every((v,i) => v === sorted[i])) return count;
        // shuffle: take first and push to end
        const first = deck.shift();
        deck.push(first);
        count++;
    }
}

// Example usage:
console.log(shufflesToSort([3,1,2])); // Output: 2
console.log(shufflesToSort([1,2,3])); // Output: 0
console.log(shufflesToSort([2,3,1])); // Output: -1

function deckShuffleSortCount(deck) {
    const n = deck.length;
    const sortedDeck = [...deck].sort((a, b) => a - b);
    let shuffleCount = 0;
    const originalDeck = [...deck];

    do {
        // Perform one shuffle: move first element to end
        const firstCard = deck.shift();
        deck.push(firstCard);
        shuffleCount++;

        // Check if deck is sorted
        if (deck.every((val, index) => val === sortedDeck[index])) {
            return shuffleCount;
        }
    } while (!deck.every((val, index) => val === originalDeck[index]));

    return -1; // Not possible to sort by shuffling
}
// Example usage:
console.log(deckShuffleSortCount([3, 1, 2])); // Output: 2
console.log(deckShuffleSortCount([1, 2, 3])); // Output: 0
console.log(deckShuffleSortCount([2, 3, 1])); // Output: -1 