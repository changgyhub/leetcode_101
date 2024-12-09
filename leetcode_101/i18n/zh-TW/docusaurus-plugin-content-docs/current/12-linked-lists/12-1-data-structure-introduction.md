---
sidebar_position: 64
---

# 12.1 資料結構介紹

（單向）`鏈結串列`是由節點與指標構成的資料結構，每個節點存有一個值，以及一個指向下一個節點的指標。因此，許多鏈結串列問題可以使用遞迴來處理。不同於陣列，鏈結串列無法直接獲取任意節點的值，必須透過指標找到該節點後才能取得其值。同樣地，在未遍歷至鏈結串列結尾前，我們無法得知其長度，除非依賴其他資料結構來儲存長度。LeetCode 預設的鏈結串列表示方法如下。

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

由於在進行鏈結串列操作時，特別是刪除節點時，經常因為直接操作當前節點而導致記憶體或指標出現問題。有兩個小技巧可以解決這個問題：

1. 儘量操作當前節點的下一個節點，而非當前節點本身。
2. 建立一個虛擬節點 (dummy node)，使其指向當前鏈結串列的頭節點。這樣即使原鏈結串列中的所有節點全被刪除，虛擬節點依然存在，最終返回 `dummy->next` 即可。

:::warning

一般來說，演算法題不需要釋放記憶體。在刷 LeetCode 的時候，若需要刪除一個節點，可以直接進行指標操作而無需回收記憶體。但在實際軟體工程中，對於無用的記憶體，建議盡量顯式釋放，或者使用智能指標進行管理。

:::