---
sidebar_position: 74
---

# 13.7 練習

## 基礎難度

### [226. Invert Binary Tree](https://leetcode.com/problems/invert-binary-tree/)

巧用递归，你可以在五行内完成这道题。

### [617. Merge Two Binary Trees](https://leetcode.com/problems/merge-two-binary-trees/)

同样的，利用递归可以轻松搞定。

### [572. Subtree of Another Tree](https://leetcode.com/problems/subtree-of-another-tree/)

子树是对称树的姊妹题，写法也十分类似。

### [404. Sum of Left Leaves](https://leetcode.com/problems/sum-of-left-leaves/)

怎么判断一个节点是不是左节点呢？一种可行的方法是，在辅函数里多传一个参数，表示当前节点是不是父节点的左节点。

### [513. Find Bottom Left Tree Value](https://leetcode.com/problems/find-bottom-left-tree-value/)

最左下角的节点满足什么条件？针对这种条件，我们该如何找到它？

### [538. Convert BST to Greater Tree](https://leetcode.com/problems/convert-bst-to-greater-tree/)

尝试利用某种遍历方式来解决此题，每个节点只需遍历一次。

### [235. Lowest Common Ancestor of a Binary Search Tree](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/)

利用 BST 的独特性质，这道题可以很轻松完成。

### [530. Minimum Absolute Difference in BST](https://leetcode.com/problems/minimum-absolute-difference-in-bst/)

还记得我们所说的，对于 BST 应该利用哪种遍历吗？

## 進階難度

### [1530. Number of Good Leaf Nodes Pairs](https://leetcode.com/problems/number-of-good-leaf-nodes-pairs/)

题目 543 的变种题，注意在辅函数中，每次更新的全局变量是左右两边距离之和满足条件的数量，而返回的是左右两边所有（长度不溢出的）子节点的高度 +1。

### [889. Construct Binary Tree from Preorder and Postorder Traversal](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-postorder-traversal/)

给定任意两种遍历结果，我们都可以重建树的结构。

### [106. Construct Binary Tree from Inorder and Postorder Traversal](https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/)

给定任意两种遍历结果，我们都可以重建树的结构。

### [94. Binary Tree Inorder Traversal](https://leetcode.com/problems/binary-tree-inorder-traversal/)

因为前中序后遍历是用递归实现的，而递归的底层实现是栈操作，因此我们总能用栈实现。

### [145. Binary Tree Postorder Traversal](https://leetcode.com/problems/binary-tree-postorder-traversal/)

因为前中序后遍历是用递归实现的，而递归的底层实现是栈操作，因此我们总能用栈实现。

### [236. Lowest Common Ancestor of a Binary Tree](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/)

现在不是 BST，而是普通的二叉树了，该怎么办？

### [109. Convert Sorted List to Binary Search Tree](https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/)

把排好序的链表变成 BST。为了使得 BST 尽量平衡，我们需要寻找链表的中点。

### [897. Increasing Order Search Tree](https://leetcode.com/problems/increasing-order-search-tree/)

把 BST 压成一个链表，务必考虑清楚指针操作的顺序，否则可能会出现环路。

### [653. Two Sum IV - Input is a BST](https://leetcode.com/problems/two-sum-iv-input-is-a-bst/)

啊哈，这道题可能会把你骗到。

### [450. Delete Node in a BST](https://leetcode.com/problems/delete-node-in-a-bst/)

当寻找到待删节点时，你可以分情况考虑——当前节点是叶节点、只有一个子节点和有两个子节点。建议同时回收内存。