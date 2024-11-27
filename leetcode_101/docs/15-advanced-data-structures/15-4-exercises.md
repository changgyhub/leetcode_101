---
sidebar_position: 78
---

# 15.4 练习

## 基础难度

### [1135. Connecting Cities With Minimum Cost](https://leetcode.com/problems/connecting-cities-with-minimum-cost/)

使用并查集，按照 Kruskal’s Algorithm 把这道题再解决一次吧。

---

## 进阶难度

### [432. All O`one Data Structure](https://leetcode.com/problems/all-oone-data-structure/)

设计一个 increaseKey，decreaseKey，getMaxKey，getMinKey 均为 $O(1)$ 时间复杂度的数据结构。

---

### [716. Max Stack](https://leetcode.com/problems/max-stack/)

设计一个支持 push，pop，top，getMax 和 popMax 的 stack。可以用类似 LRU 的方法降低时间复杂度，但是因为想要获得的是最大值，我们应该把 unordered_map 换成哪一种数据结构呢？