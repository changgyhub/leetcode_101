---
sidebar_position: 1
---

# 1.1 Algorithm Explanation

As the name implies, a `greedy algorithm or greedy strategy` adopts a greedy approach, `ensuring that each step is locally optimal`, thereby resulting in a `globally optimal` solution.

Let’s take the simplest example: Xiaoming and Xiaowang love apples. Xiaoming can eat five, and Xiaowang can eat three. Given that the orchard has an unlimited supply of apples, calculate the maximum number of apples Xiaoming and Xiaowang can eat together. In this example, the greedy strategy is for each person to eat the maximum number of apples they can. This strategy is locally optimal for each person. Since the global result is the simple sum of local results, and the local results are independent of each other, the locally optimal strategy is also globally optimal.

Proving that a problem can be solved using a greedy algorithm is sometimes far more complex than actually solving it with the greedy algorithm. Generally, we use greedy algorithms when, after simple operations, there is a clear recursive relationship from local to global, or when the result can be deduced using mathematical induction.
