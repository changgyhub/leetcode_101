---
sidebar_position: 63
---

# 11.5 練習

## 基礎難度

### [409. Longest Palindrome](https://leetcode.com/problems/longest-palindrome/)

计算一组字符可以构成的回文字符串的最大长度，可以利用其它数据结构进行辅助统计。

### [3. Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/)

计算最长无重复子字符串，同样的，可以利用其它数据结构进行辅助统计。


## 進階難度

### [772. Basic Calculator III](https://leetcode.com/problems/basic-calculator-iii/)

题目 227 的 follow-up，十分推荐练习。

### [5. Longest Palindromic Substring](https://leetcode.com/problems/longest-palindromic-substring/)

类似于我们讲过的子序列问题，子数组或子字符串问题常常也可以用动态规划来解决。先使用动态规划写出一个 $O(n^2)$ 时间复杂度的算法，再搜索一下 Manacher’s Algorithm，它可以在 $O(n)$ 时间解决这一问题。