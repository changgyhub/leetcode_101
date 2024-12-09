---
sidebar_position: 20
---

# 4.4 練習

## 基礎難度

### [451. Sort Characters By Frequency](https://leetcode.com/problems/sort-characters-by-frequency/)

桶排序的變形題。

<details>
    <summary>題解</summary>

#### 解題思路

本題要求根據字元的出現頻率對字元進行排序，並返回排序後的字串。可以使用 **雜湊表** 和 **桶排序** 來高效解決這個問題。

1. **統計字元頻率**：
   - 使用 `Counter` 統計每個字元的出現次數，將結果儲存到 `counts`。

2. **桶排序**：
   - 建立一個桶 `buckets`，其中索引表示字元的出現頻率，值是具有該頻率的字元列表。
   - 根據字元的頻率將它們放入對應的桶中。

3. **生成結果**：
   - 從高頻到低頻遍歷桶，根據頻率將字元重複相應次數，拼接成結果字串。

#### 程式碼

```python
class Solution:
    def frequencySort(self, s: str) -> str:
        counts = Counter(s)
        buckets = dict()
        result = []
        for char, count in counts.items():
            if count in buckets:
                buckets[count].append(char)
            else:
                buckets[count] = [char]
        for count in range(len(s), 0, -1):
            if count in buckets:
                for char in buckets[count]:
                    result.append(char*count)
        return ''.join(result)
```

#### 複雜度分析

- **時間複雜度**:  
  - $O(n)$，其中 $n$ 是字串的長度。統計頻率需要 $O(n)$，桶排序和拼接結果也需要 $O(n)$。

- **空間複雜度**:  
  - $O(n)$，用於儲存字元頻率的雜湊表和桶。

</details>


---

## 進階難度

### [75. Sort Colors](https://leetcode.com/problems/sort-colors/)

非常經典的荷蘭國旗問題，考察如何對三個重複且混亂的值進行排序。

<details>
    <summary>題解</summary>

#### 解題思路

本題要求對包含 `0`、`1` 和 `2` 的陣列進行排序，使得相同數字的元素相鄰，並且按照 `0`、`1`、`2` 的順序排列。我們可以在 $O(n)$ 的時間複雜度內使用 **雙指標（雙指針）** 來完成排序，該方法被稱為 **荷蘭國旗問題**。

1. **初始化三個指標**：
   - `left`：指向下一個要放置 `0` 的位置。
   - `right`：指向下一個要放置 `2` 的位置。
   - `i`：當前遍歷的索引。

2. **遍歷陣列**：
   - 當 `nums[i] == 0` 時，將 `nums[i]` 與 `nums[left]` 交換，然後將 `left` 和 `i` 向右移動。
   - 當 `nums[i] == 2` 時，將 `nums[i]` 與 `nums[right]` 交換，並將 `right` 向左移動（此時不移動 `i`，因為交換過來的值可能還需要處理）。
   - 當 `nums[i] == 1` 時，僅將 `i` 向右移動。

3. **終止條件**：
   - 當 `i` 超過 `right` 時，排序完成。

#### 程式碼

```python
class Solution:
    def sortColors(self, nums: List[int]) -> None:
        left, i, right = 0, 0, len(nums) - 1
        
        while i <= right:
            if nums[i] == 0:
                nums[left], nums[i] = nums[i], nums[left]
                left += 1
                i += 1
            elif nums[i] == 2:
                nums[right], nums[i] = nums[i], nums[right]
                right -= 1
            else:
                i += 1
```

#### 複雜度分析

- **時間複雜度**: $O(n)$，其中 $n$ 是陣列的長度。每個元素最多只被遍歷一次。
- **空間複雜度**: $O(1)$，僅使用了常數額外空間。

</details>
