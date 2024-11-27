---
sidebar_position: 78
---

# 14.4 練習

## 基礎難度

### [1059. All Paths from Source Lead to Destination](https://leetcode.com/problems/all-paths-from-source-lead-to-destination/)

雖然使用深度優先搜尋（DFS）可以解決大部分圖的遍歷問題，但需要特別注意檢查是否陷入了環路。

---

## 進階難度

### [1135. Connecting Cities With Minimum Cost](https://leetcode.com/problems/connecting-cities-with-minimum-cost/)

筆者其實已經撰寫了這道題的詳細解答，但後來發現該題需要付費解鎖才能查看。為了避免版權糾紛，將此題移至練習題中。本題考察最小生成樹（minimum spanning tree, MST）的求法，通常可以用兩種演算法實現：

- **Prim’s Algorithm**：利用優先佇列選擇最小的消耗。
- **Kruskal’s Algorithm**：對邊排序後使用並查集（Union-Find）。

---

### [882. Reachable Nodes In Subdivided Graph](https://leetcode.com/problems/reachable-nodes-in-subdivided-graph/)

筆者考慮了很久，最終決定將這道題放在練習題中，而非詳細講解。本題屬於經典的節點最短距離問題，常用的解法包括：

- **Bellman-Ford** 單源最短路演算法（允許負邊權重）。
- **Dijkstra** 無負邊單源最短路演算法。

雖然這些都是經典演算法，但 LeetCode 中相關題型較少，因此這裡僅供讀者自行深入學習。