---
sidebar_position: 58
---

# 10.11 練習

## 基礎難度

### [566. Reshape the Matrix](https://leetcode.com/problems/reshape-the-matrix/)

没有什么难度，只是需要一点耐心。

### [225. Implement Stack using Queues](https://leetcode.com/problems/implement-stack-using-queues/)

利用相似的方法，我们也可以用 queue 实现 stack。

### [503. Next Greater Element II](https://leetcode.com/problems/next-greater-element-ii/)

Daily Temperature 的变种题。

### [217. Contains Duplicate](https://leetcode.com/problems/contains-duplicate/)

使用什么数据结构可以快速判断重复呢？

### [697. Degree of an Array](https://leetcode.com/problems/degree-of-an-array/)

如何对数组进行预处理才能正确并快速地计算子数组的长度？

### [594. Longest Harmonious Subsequence](https://leetcode.com/problems/longest-harmonious-subsequence/)

最长连续序列的变种题。

### [15. 3Sum](https://leetcode.com/problems/3sum/)

因为排序的复杂度是 $O(n \log n) < O(n^2)$，因此我们既可以排序后再进行 $O(n^2)$ 的指针搜索，也可以直接利用哈希表进行 $O(n^2)$ 的搜索。

## 進階難度

### [287. Find the Duplicate Number](https://leetcode.com/problems/find-the-duplicate-number/)

寻找丢失数字的变种题。除了标负位置，你还有没有其它算法可以解决这个问题？

### [313. Super Ugly Number](https://leetcode.com/problems/super-ugly-number/)

尝试使用优先队列解决这一问题。

### [870. Advantage Shuffle](https://leetcode.com/problems/advantage-shuffle/)

如果我们需要比较大小关系，而且同一数字可能出现多次，那么应该用什么数据结构呢？

### [307. Range Sum Query - Mutable](https://leetcode.com/problems/range-sum-query-mutable/)

前缀和的变种题。好吧我承认，这道题可能有些超纲，你或许需要搜索一下什么是线段树。