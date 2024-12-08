---
sidebar_position: 74
---

# 13.7 Exercises

## Basic Difficulty

### [226. Invert Binary Tree](https://leetcode.com/problems/invert-binary-tree/)

With a clever use of recursion, you can complete this task in just five lines.

---

### [617. Merge Two Binary Trees](https://leetcode.com/problems/merge-two-binary-trees/)

Similarly, recursion can easily handle this task.

---

### [572. Subtree of Another Tree](https://leetcode.com/problems/subtree-of-another-tree/)

This is the sister problem of Symmetric Tree, and the implementation is very similar.

---

### [404. Sum of Left Leaves](https://leetcode.com/problems/sum-of-left-leaves/)

How can you determine if a node is a left leaf? One feasible approach is to pass an additional parameter to the helper function indicating whether the current node is a left child of its parent.

---

### [513. Find Bottom Left Tree Value](https://leetcode.com/problems/find-bottom-left-tree-value/)

What condition must the bottom-left node satisfy? How can we locate it based on this condition?

---

### [538. Convert BST to Greater Tree](https://leetcode.com/problems/convert-bst-to-greater-tree/)

Try to solve this problem using a specific traversal method, visiting each node exactly once.

---

### [235. Lowest Common Ancestor of a Binary Search Tree](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/)

Using the unique properties of a BST, this problem can be solved quite easily.

---

### [530. Minimum Absolute Difference in BST](https://leetcode.com/problems/minimum-absolute-difference-in-bst/)

Remember the traversal method we discussed for BSTs?

---

## Advanced Difficulty

### [1530. Number of Good Leaf Nodes Pairs](https://leetcode.com/problems/number-of-good-leaf-nodes-pairs/)

A variation of problem 543. Pay attention in the helper function: the global variable should be updated based on the number of valid pairs of distances between left and right subtrees, while the return value is the height of all valid leaf nodes (+1) from both subtrees.

---

### [889. Construct Binary Tree from Preorder and Postorder Traversal](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-postorder-traversal/)

Given any two traversal results, we can reconstruct the tree structure.

---

### [106. Construct Binary Tree from Inorder and Postorder Traversal](https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/)

Given any two traversal results, we can reconstruct the tree structure.

---

### [94. Binary Tree Inorder Traversal](https://leetcode.com/problems/binary-tree-inorder-traversal/)

Since preorder, inorder, and postorder traversals are implemented using recursion, and recursion inherently uses a stack, we can always use a stack to implement them.

---

### [145. Binary Tree Postorder Traversal](https://leetcode.com/problems/binary-tree-postorder-traversal/)

Since preorder, inorder, and postorder traversals are implemented using recursion, and recursion inherently uses a stack, we can always use a stack to implement them.

---

### [236. Lowest Common Ancestor of a Binary Tree](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/)

Now it’s not a BST but a general binary tree. What should we do?

---

### [109. Convert Sorted List to Binary Search Tree](https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/)

Convert a sorted linked list into a BST. To ensure the BST remains balanced, we need to find the middle point of the list.

---

### [897. Increasing Order Search Tree](https://leetcode.com/problems/increasing-order-search-tree/)

Flatten a BST into a linked list. Be cautious about the order of pointer manipulations to avoid creating loops.

---

### [653. Two Sum IV - Input is a BST](https://leetcode.com/problems/two-sum-iv-input-is-a-bst/)

Ah, this problem might trick you.

---

### [450. Delete Node in a BST](https://leetcode.com/problems/delete-node-in-a-bst/)

When you locate the node to delete, consider different cases: whether the node is a leaf, has only one child, or has two children. It’s recommended to reclaim memory at the same time.