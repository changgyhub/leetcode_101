---
sidebar_position: 78
---

# 15.4 練習

## 基礎難度

### [1135. Connecting Cities With Minimum Cost](https://leetcode.com/problems/connecting-cities-with-minimum-cost/)

使用並查集，按照 Kruskal’s Algorithm 再解一次這道題吧。

---

## 進階難度

### [432. All O`one Data Structure](https://leetcode.com/problems/all-oone-data-structure/)

設計一個包含 increaseKey，decreaseKey，getMaxKey，getMinKey 均為 $O(1)$ 時間複雜度的資料結構。

---

### [716. Max Stack](https://leetcode.com/problems/max-stack/)

設計一個支持 push，pop，top，getMax 和 popMax 的堆疊。可以用類似 LRU 的方法降低時間複雜度，但因為要獲取的是最大值，我們應該把 unordered_map 換成哪一種資料結構呢？
