---
sidebar_position: 64
---

# 12.1 Introduction to Data Structures

A (singly) `linked list` is a data structure composed of nodes and pointers. Each node contains a value and a pointer to the next node. As a result, many linked list problems can be solved using recursion. Unlike arrays, a linked list cannot directly access the value of any node; it must traverse through pointers to reach the desired node. Similarly, the length of a linked list cannot be determined unless it is fully traversed or tracked using another data structure. LeetCode’s default representation of a linked list is as follows.

<Tabs>
<TabItem value="cpp" label="C++">

```cpp
struct ListNode {
    int val;
    ListNode *next;
    ListNode(int x) : val(x), next(nullptr) {}
};
```

</TabItem>
<TabItem value="py" label="Python">

```py
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None # or a ListNode
```

</TabItem>

</Tabs>

When performing operations on a linked list, especially when deleting nodes, issues with memory or pointers often arise due to directly modifying the current node. Two techniques can help mitigate these problems:

1. Try to operate on the next node rather than the current node itself.
2. Create a dummy node that points to the head of the current linked list. This ensures that even if all nodes in the original list are deleted, the dummy node persists, and you can safely return `dummy->next`.

:::warning

In most algorithm problems, explicit memory deletion is unnecessary. When solving LeetCode problems, you can simply adjust pointers without deallocating memory. However, in real-world software engineering, it is recommended to explicitly free unused memory or use smart pointers to manage it efficiently.

:::