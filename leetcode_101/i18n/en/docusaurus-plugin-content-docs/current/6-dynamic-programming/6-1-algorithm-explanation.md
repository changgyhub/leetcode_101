---
sidebar_position: 26
---

# 6.1 Algorithm Explanation

Here, we quote Wikipedia’s description: "`Dynamic Programming` (DP) is effective in finding the optimal solution for problems with many `overlapping subproblems`. It redefines the problem into subproblems. To avoid repeatedly solving these subproblems, their results are progressively computed and stored, starting from simpler problems until the entire problem is resolved. Therefore, dynamic programming saves the results of recursion and avoids spending time solving the same problems repeatedly. Dynamic programming can only be applied to problems with an `optimal substructure`. The optimal substructure means that the local optimal solution can determine the global optimal solution (this requirement is not always completely met for some problems, so certain approximations may be introduced). Simply put, the problem can be broken down into subproblems to solve."

In simple terms, dynamic programming differs from other traversal algorithms (e.g., depth-first search or breadth-first search) in that it `stores the solutions of subproblems to avoid redundant calculations`. The key to solving dynamic programming problems lies in finding the `state transition equation`, which allows us to solve the final problem by computing and storing the solutions to subproblems.

Additionally, we can apply `space optimization` techniques to dynamic programming to reduce space usage. This technique will be introduced in subsequent problems.

In some cases, dynamic programming can be considered a form of `memoized` traversal. Memoization means that if a subproblem has been solved during traversal, its result can be stored and reused later when the same subproblem is encountered again. Dynamic programming is bottom-up, solving subproblems first and then the parent problem. Memoized traversal is top-down, starting from the parent problem and solving subproblems as they are encountered. If the problem requires only the final state, dynamic programming is more convenient; if the problem requires all possible paths, memoized traversal is more suitable.