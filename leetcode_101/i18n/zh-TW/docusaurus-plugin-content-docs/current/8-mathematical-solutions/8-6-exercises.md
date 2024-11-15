---
sidebar_position: 43
---

# 8.6 練習

## 基礎難度

### [168. Excel Sheet Column Title](https://leetcode.com/problems/excel-sheet-column-title/)

7 进制转换的变种题，需要注意的一点是从 1 开始而不是 0。

### [67. Add Binary](https://leetcode.com/problems/add-binary/)

字符串加法的变种题。

### [238. Product of Array Except Self](https://leetcode.com/problems/product-of-array-except-self/)

你可以不使用除法做这道题吗？我们很早之前讲过的题目 135 或许能给你一些思路。

## 進階難度

### [462. Minimum Moves to Equal Array Elements II](https://leetcode.com/problems/minimum-moves-to-equal-array-elements-ii/)

这道题是笔者最喜欢的 LeetCode 题目之一，需要先推理出怎么样移动是最优的，再考虑如何进行移动。你或许需要一些前些章节讲过的算法。

### [169. Majority Element](https://leetcode.com/problems/majority-element/)

如果想不出简单的解决方法，搜索一下 Boyer-Moore Majority Vote 算法吧。

### [470. Implement Rand10() Using Rand7()](https://leetcode.com/problems/implement-rand10-using-rand7/)

如何用一个随机数生成器生成另一个随机数生成器？你可能需要利用原来的生成器多次。

### [202. Happy Number](https://leetcode.com/problems/happy-number/)

你可以简单的用一个 while 循环解决这道题，但是有没有更好的解决办法？如果我们把每个数字想象成一个节点，是否可以转化为环路检测？