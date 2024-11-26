---
sidebar_position: 78
---

# 14.4 練習

## 基礎難度

### [1059. All Paths from Source Lead to Destination](https://leetcode.com/problems/all-paths-from-source-lead-to-destination/)

虽然使用深度优先搜索可以解决大部分的图遍历问题，但是注意判断是否陷入了环路。

---

## 進階難度

### [1135. Connecting Cities With Minimum Cost](https://leetcode.com/problems/connecting-cities-with-minimum-cost/)

笔者其实已经把这道题的题解写好了，才发现这道题是需要解锁才可以看的题目。为了避免版权纠纷，故将其移至练习题内。本题考察最小生成树（minimum spanning tree, MST）的求法，通常可以用两种方式求得：Prim’s Algorithm，利用优先队列选择最小的消耗；以及 Kruskal’s Algorithm，排序后使用并查集。

---

### [882. Reachable Nodes In Subdivided Graph](https://leetcode.com/problems/reachable-nodes-in-subdivided-graph/)

这道题笔者考虑了很久，最终决定把它放在练习题而非详细讲解。本题是经典的节点最短距离问题，常用的算法有 Bellman-Ford 单源最短路算法，以及 Dijkstra 无负边单源最短路算法。虽然经典，但是 LeetCode 很少有相关的题型，因此这里仅供读者自行深入学习。