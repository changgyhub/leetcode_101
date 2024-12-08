---
sidebar_position: 16
---

# 3.6 練習

## 基礎難度

### [154. Find Minimum in Rotated Sorted Array II](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/)

旋轉陣列的變形題之一。

<details>
    <summary>題解</summary>

#### 解題思路

本題需要找到旋轉排序陣列中的最小值，且陣列中可能包含重複元素。利用 **二分搜尋法**，可以在 $O(\log n)$ 的平均時間複雜度下高效解決，儘管最壞情況可能退化到 $O(n)$。

- **重點問題**：
  1. 如果陣列中沒有重複元素，透過比較 `nums[mid]` 和 `nums[r]` 可以直接判斷哪個區間是遞增的。
  2. 如果陣列中有重複元素，當 `nums[mid] == nums[r]` 時，無法直接確定哪一邊是遞增的，因此需要額外處理。

- **核心邏輯**：
  1. 計算中間值 `mid = (l + r) // 2`。
  2. 如果 `nums[mid] < nums[r]`，說明右半部分是遞增的，最小值可能在左半部分或中間，更新右邊界 `r = mid`。
  3. 如果 `nums[mid] > nums[r]`，說明左半部分是遞增的，最小值只能在右半部分，更新左邊界 `l = mid + 1`。
  4. 如果 `nums[mid] == nums[r]`，無法確定遞增區間，縮小搜尋範圍，將右邊界減一 `r -= 1`。

#### 程式碼

```python
class Solution:
    def findMin(self, nums: List[int]) -> int:
        l, r = 0, len(nums) - 1
        while l < r:
            mid = (l + r) // 2
            if nums[mid] < nums[r]:
                r = mid  # 最小值可能在左半部分或中間
            elif nums[mid] > nums[r]:
                l = mid + 1  # 最小值一定在右半部分
            else:
                r -= 1  # 無法確定區間遞增性，縮小範圍
        return nums[l]
```

#### 複雜度分析

- **時間複雜度**:
  - 平均情況：$O(\log n)$，每次迭代將搜尋範圍減半。
  - 最壞情況：$O(n)$，當所有元素相同時，無法利用二分特性，只能線性縮小範圍。
- **空間複雜度**: $O(1)$，只使用了常數額外空間。

</details>


---

### [540. Single Element in a Sorted Array](https://leetcode.com/problems/single-element-in-a-sorted-array/)

在出現單獨數之前和之後，奇數位與偶數位的值發生了什麼變化？

<details>
    <summary>題解</summary>

#### 解題思路

本題需要在排序陣列中找到唯一不重複的元素，每個其他數字都恰好出現兩次。利用 **二分搜尋法**，可以有效地解決此問題。

1. **特性分析**：
   - 不重複的單一元素會打破「成對分佈」的規律：
     - 如果索引是偶數，且 `nums[mid] == nums[mid + 1]`，單一元素一定在右半部分。
     - 否則，單一元素在左半部分。
   - 調整 `mid` 為偶數，以便直接判斷其是否與右側元素配對。

2. **二分邏輯**：
   - 若 `nums[mid] == nums[mid + 1]`，則單一元素在右側，移動左指標。
   - 若 `nums[mid] != nums[mid + 1]`，則單一元素在左側，移動右指標。

3. **最終結果**：
   - 當 `left == right` 時，該索引即為單一元素所在位置。

#### 程式碼

```python
class Solution:
    def singleNonDuplicate(self, nums: List[int]) -> int:
        l, r = 0, len(nums) - 1
        while l < r:
            mid = (l + r) // 2
            if mid % 2 == 1:  # 保證 mid 是偶數
                mid -= 1
            if nums[mid] == nums[mid + 1]:
                l = mid + 2  # 單一元素在右側
            else:
                r = mid  # 單一元素在左側
        return nums[l]
```

#### 複雜度分析

- **時間複雜度**: $O(\log n)$，因為每次迭代將搜尋範圍減半。
- **空間複雜度**: $O(1)$，只使用了常數額外空間。

</details>



---

## 進階難度

### [4. Median of Two Sorted Arrays](https://leetcode.com/problems/median-of-two-sorted-arrays/)

需要對兩個陣列同時進行二分搜尋。

<details>
    <summary>題解</summary>

#### 解題思路

本題需要在兩個排序陣列中找到中位數，要求時間複雜度為 $O(\log (m+n))$。我們可以利用 **二分搜尋法** 高效解決。

1. **特性分析**：
   - 中位數將兩個陣列分為「左側」和「右側」兩部分，保證：
     - 左側所有元素的數量等於或多於右側。
     - 左側所有元素小於等於右側。
   - 透過二分搜尋在其中一個陣列上劃分位置，從而確定整體的中位數。

2. **解法步驟**：
   - 確保對短的陣列進行二分搜尋，以降低時間複雜度。
   - 設置兩個指標 `left` 和 `right`，表示短陣列的二分搜尋範圍。
   - 計算劃分位置：
     - `i` 為短陣列的劃分位置。
     - `j` 為長陣列的劃分位置，根據總長度和 `i` 計算得出。
   - 比較劃分後的左右部分，判斷是否滿足條件：
     - 左側最大值 $\leq$ 右側最小值。

3. **處理邊界條件**：
   - 若劃分正確，根據總長度的奇偶性返回結果：
     - 奇數時，返回左側最大值。
     - 偶數時，返回左側最大值與右側最小值的平均值。
   - 若劃分不正確，調整 `left` 或 `right`，繼續二分搜尋。

#### 程式碼

```python
class Solution:
    def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:
        # 保證 nums1 是較短的陣列
        if len(nums1) > len(nums2):
            nums1, nums2 = nums2, nums1

        m, n = len(nums1), len(nums2)
        total_left = (m + n + 1) // 2

        left, right = 0, m
        while left <= right:
            i = (left + right) // 2  # nums1 的劃分點
            j = total_left - i  # nums2 的劃分點

            nums1_left_max = float('-inf') if i == 0 else nums1[i - 1]
            nums1_right_min = float('inf') if i == m else nums1[i]
            nums2_left_max = float('-inf') if j == 0 else nums2[j - 1]
            nums2_right_min = float('inf') if j == n else nums2[j]

            # 確保劃分正確
            if nums1_left_max <= nums2_right_min and nums2_left_max <= nums1_right_min:
                # 如果總數是奇數，取左邊最大值
                if (m + n) % 2 == 1:
                    return max(nums1_left_max, nums2_left_max)
                # 如果總數是偶數，取左邊最大值和右邊最小值的平均
                return (max(nums1_left_max, nums2_left_max) + min(nums1_right_min, nums2_right_min)) / 2
            
            # 調整劃分
            elif nums1_left_max > nums2_right_min:
                right = i - 1
            else:
                left = i + 1
```

#### 複雜度分析

- **時間複雜度**: $O(\log \min(m, n))$，其中 $m$ 和 $n$ 分別為兩個陣列的長度。因為對較短的陣列進行二分搜尋。
- **空間複雜度**: $O(1)$，只使用了常數額外空間。

</details>
