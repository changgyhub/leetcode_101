---
sidebar_position: 11
---

# 3.1 Algorithm Explanation

`Binary search`, also known as `bisection` or `halving search` (binary search, bisect), reduces the complexity of a search operation by dividing the search interval into two parts at each step and only proceeding with one part. For an array of length $O(n)$, the time complexity of binary search is $O(\log n)$.

For example, given a sorted array $\{3,4,5,6,7\}$, we want to find out if 4 is in this array. During the first bisection, we consider the median 5. Since 5 is greater than 4, if 4 exists in this array, it must be in the left half of the array. Thus, our search interval becomes $\{3,4,5\}$. (Note: Depending on the specific case and your problem-solving habits, 5 may or may not be included, but this does not affect the time complexity.) In the second bisection, the new median 4 is exactly the number we are looking for. Therefore, for an array of length 5, we only performed 2 searches. In contrast, a linear search might require up to 5 checks in the worst-case scenario.

Binary search can also be mathematically defined. Given a monotonic function $f(t)$ in the interval $[a, b]$, if $f(a)$ and $f(b)$ have opposite signs, there must be a solution $c$ such that $f(c) = 0$. In the earlier example, $f(t)$ is a discrete function $f(t) = t + 2$, and checking if 4 exists is equivalent to solving $f(t) - 4 = 0$. Since $f(1) - 4 = 3 - 4 = -1 < 0$ and $f(5) - 4 = 7 - 4 = 3 > 0$, and the function is monotonically increasing in this interval, we can use binary search to solve the problem. If the interval is reduced to a single number and no solution exists in that interval, it means there is no discrete solution, i.e., 4 is not in the array.

In implementation, whether the interval is defined as open or closed at the ends does not matter in most cases. Beginners may find it tricky to decide this. Here are two tips: first, try to consistently use one approach, such as left-closed-right-open (commonly used in C++, Python, etc.) or left-closed-right-closed (convenient for boundary handling). Second, while solving problems, think about whether your method will lead to an infinite loop when the interval is reduced to one or two elements. If it does, consider switching to another approach.

Binary search can also be viewed as a special case of the two-pointer technique, but we usually differentiate the two. In two-pointer problems, the pointers typically move step by step, whereas in binary search, the pointers move by halving the interval at each step.
