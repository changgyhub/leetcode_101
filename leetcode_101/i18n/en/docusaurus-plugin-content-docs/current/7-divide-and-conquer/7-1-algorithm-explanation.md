---
sidebar_position: 35
---

# 7.1 Algorithm Explanation

As the name suggests, `divide and conquer` problems consist of two parts: "divide" and "conquer." By breaking the original problem into subproblems and then solving and merging these subproblems, we can solve the original problem. Merge sort, introduced in the sorting chapter, is a classic example of divide and conquer. In merge sort, the "divide" step splits the array into two smaller arrays using recursion until we get multiple arrays of length 1. The "conquer" step merges two sorted arrays into a single sorted array, starting from arrays of length 1 and eventually forming the final array.

We can also use a mathematical expression to describe this process. Let $T(n)$ represent the time complexity of processing an array of length $n$. The recurrence relation for merge sort is $T(n) = 2T(n/2) + O(n)$. Here, $2T(n/2)$ represents splitting the array into two halves, and $O(n)$ represents the time complexity of merging two arrays of length $n/2$.

:::info Theorem 7.1. Master Theorem

For $T(n) = aT(n/b) + f(n)$, define $k = \log_{b} a$:  
1. If $f(n) = O(n^p)$ and $p < k$, then $T(n) = O(n^k)$  
2. If there exists $c \geq 0$ such that $f(n) = O(n^k \log^c n)$, then $T(n) = O(n^k \log^{c+1} n)$  
3. If $f(n) = O(n^p)$ and $p > k$, then $T(n) = O(f(n))$  

:::

Using the master theorem, we can deduce that merge sort falls into the second category with a time complexity of $O(n \log n)$. Other divide-and-conquer problems can also use the master theorem to determine their time complexities.

Additionally, top-down divide-and-conquer can be combined with memoization to avoid redundant traversal of identical subproblems. Alternatively, if it's convenient for derivation, a bottom-up dynamic programming approach can be used instead.