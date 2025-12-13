## JS-DSA-Practice — repo overview

This repository is a collection of small JavaScript programs and exercises that demonstrate common algorithmic problem-solving patterns and data-structure techniques. It's organized as a learning/workbook project — each folder groups related examples and includes sample inputs and console outputs so you can run them directly with Node.

This README gives a quick orientation and instructions for running the examples.

## What this repo covers

- Problem solving patterns: Frequency Counter, Multiple Pointers, Sliding Window, Divide & Conquer, Recursion, and more.
- Classic algorithm examples: binary search, max subarray sum, longest unique substring, etc.
- DSA building blocks: basic linked list, stacks, binary search trees (in other folders).
- Small focused programs suitable for interview prep and learning by doing.

## Top-level layout (high level)

- `001_Problem_Solving_Pattern/` — core algorithmic patterns and small examples (anagram, frequency counter, sliding window, recursion, binary search, ...).
- `051_Singly_Linked_List/`, `052_Doubly_Linked_List/`, `053_Stacks/`, `055_Binary_Search_Tree/` — data-structure implementations and demos.
- `101_code_signal_practice/`, `102_CapOne_DSA_Sample/`, `103_leetcode_problems/` — practice problems and solutions.
- `Test/` — playground or scratch files.

Note: Each folder typically contains self-contained `.js` files that print sample outputs when executed.

## How to run examples

1. Open a terminal in the repository or a specific folder. Example using zsh (macOS):

```bash
# run a single example (from repo root or inside the folder)
node 001_Problem_Solving_Pattern/004_WAP_FREQUENCY_COUNTER_Anagram.js

# or change to the folder and run the file directly
cd "001_Problem_Solving_Pattern"
node 008_WAP_SLIDING_WINDOW_LongestUniqueChars.js
```

2. Examples are plain Node scripts — no dependencies required. If you add any packages later, a `package.json` will be included.

## Coding style & conventions

- Files use small, focused functions with example console calls at the bottom. Many files include both naive and optimized variants to illustrate trade-offs.
- Examples are intentionally simple so you can copy them into a REPL or run them quickly.

## Suggested next steps

- Add a small test runner (e.g., `examples/run-all.js`) to run examples and summarize outputs.
- Add unit tests (Jest or Node asserts) for functions you want to verify.
- Add short READMEs to other folders that describe their contents (I can help generate these automatically).

## Contributing / License

Feel free to open issues or add PRs that improve explanations, fix edge cases, or convert examples to tests. This repository includes a `LICENSE` file — follow that license when contributing.

---

If you'd like, I can:
- generate README summaries for other folders,
- add a `run-all` script that executes each example and collects outputs,
- or convert a selection of scripts into unit tests.

Tell me which follow-up you'd like and I'll add it.



