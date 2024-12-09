---
sidebar_position: 74
---

# 13.7 練習

## 基礎難度

### [226. Invert Binary Tree](https://leetcode.com/problems/invert-binary-tree/)

巧用遞迴，你可以在五行內完成這道題。

---

### [617. Merge Two Binary Trees](https://leetcode.com/problems/merge-two-binary-trees/)

同樣的，利用遞迴可以輕鬆搞定。

---

### [572. Subtree of Another Tree](https://leetcode.com/problems/subtree-of-another-tree/)

子樹是對稱樹的姊妹題，寫法也十分類似。

---

### [404. Sum of Left Leaves](https://leetcode.com/problems/sum-of-left-leaves/)

怎麼判斷一個節點是不是左節點呢？一種可行的方法是，在輔函式裡多傳一個參數，表示當前節點是不是父節點的左節點。

---

### [513. Find Bottom Left Tree Value](https://leetcode.com/problems/find-bottom-left-tree-value/)

最左下角的節點滿足什麼條件？針對這種條件，我們該如何找到它？

---

### [538. Convert BST to Greater Tree](https://leetcode.com/problems/convert-bst-to-greater-tree/)

嘗試利用某種遍歷方式來解決此題，每個節點只需遍歷一次。

---

### [235. Lowest Common Ancestor of a Binary Search Tree](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/)

利用 BST 的獨特性質，這道題可以很輕鬆完成。

---

### [530. Minimum Absolute Difference in BST](https://leetcode.com/problems/minimum-absolute-difference-in-bst/)

還記得我們所說的，對於 BST 應該利用哪種遍歷嗎？

---

## 進階難度

### [1530. Number of Good Leaf Nodes Pairs](https://leetcode.com/problems/number-of-good-leaf-nodes-pairs/)

題目 543 的變種題，注意在輔函式中，每次更新的全域變數是左右兩邊距離之和滿足條件的數量，而返回的是左右兩邊所有（長度不溢出的）子節點的高度 +1。

---

### [889. Construct Binary Tree from Preorder and Postorder Traversal](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-postorder-traversal/)

給定任意兩種遍歷結果，我們都可以重建樹的結構。

---

### [106. Construct Binary Tree from Inorder and Postorder Traversal](https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/)

給定任意兩種遍歷結果，我們都可以重建樹的結構。

---

### [94. Binary Tree Inorder Traversal](https://leetcode.com/problems/binary-tree-inorder-traversal/)

因為前中序後遍歷是用遞迴實現的，而遞迴的底層實現是堆疊操作，因此我們總能用堆疊實現。

---

### [145. Binary Tree Postorder Traversal](https://leetcode.com/problems/binary-tree-postorder-traversal/)

因為前中序後遍歷是用遞迴實現的，而遞迴的底層實現是堆疊操作，因此我們總能用堆疊實現。

---

### [236. Lowest Common Ancestor of a Binary Tree](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/)

現在不是 BST，而是普通的二元樹了，該怎麼辦？

---

### [109. Convert Sorted List to Binary Search Tree](https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/)

把排好序的鏈結串列變成 BST。為了使得 BST 盡量平衡，我們需要尋找鏈結串列的中點。

---

### [897. Increasing Order Search Tree](https://leetcode.com/problems/increasing-order-search-tree/)

把 BST 壓成一個鏈結串列，務必考慮清楚指標操作的順序，否則可能會出現環路。

---

### [653. Two Sum IV - Input is a BST](https://leetcode.com/problems/two-sum-iv-input-is-a-bst/)

啊哈，這道題可能會把你騙到。

---

### [450. Delete Node in a BST](https://leetcode.com/problems/delete-node-in-a-bst/)

當尋找到待刪節點時，你可以分情況考慮——當前節點是葉節點、只有一個子節點和有兩個子節點。建議同時回收記憶體。
