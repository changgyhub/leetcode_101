---
sidebar_position: 4
---

# 1.4 練習

## 基礎難度

### [605. Can Place Flowers](https://leetcode.com/problems/can-place-flowers/)

採取什麼樣的貪心策略，可以種植最多的花朵呢？

<details>
    <summary>題解</summary>

#### 解題思路

1. **問題轉換**:  
   為簡化邊界判斷，在花圃兩端添加虛擬位置 `0`。

2. **遍歷邏輯**:  
   - 對每個位置，檢查當前位置為 `0` 且左右兩側也為 `0` 時，可種植一朵花。
   - 種花後將位置設為 `1` 並將 `n` 減 1。

3. **最終判斷**:  
   程式遍歷完後檢查 `n` 是否小於等於 `0`，返回結果。


    ```py
    class Solution:
        def canPlaceFlowers(self, flowerbed: List[int], n: int) -> bool:        
            flowerbed = [0] + flowerbed + [0]
            for i, f in enumerate(flowerbed[1:-1],start=1):
                if f == 0 and flowerbed[i-1] == 0 and flowerbed[i+1] == 0:
                    n -= 1
                    flowerbed[i] = 1
            return n <= 0             
    ```

#### 複雜度分析

- **時間複雜度**: 主迴圈遍歷了 `flowerbed` 的所有元素一次，因此時間複雜度為 $O(m)$，其中 $m$ 是 `flowerbed` 的長度。

- **空間複雜度**: 程式在 `flowerbed` 兩端添加了額外的元素，佔用固定的額外空間，因此空間複雜度為 $O(1)$。

</details> 

---

### [452. Minimum Number of Arrows to Burst Balloons](https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/)

這道題和題目 435 十分類似，但是稍有不同，具體是哪裡不同呢？

<details>
    <summary>題解</summary>

#### 解題思路

- 將所有氣球根據右邊界進行升序排序。
- 初始化箭數 `arrows` 為 1，並記錄第一支箭射出的右邊界 `end`。
- 遍歷所有氣球：
  - 如果當前氣球的左邊界大於 `end`，表示需要新增一支箭，更新 `end` 為當前氣球的右邊界。
- 返回箭數 `arrows`。

```python
class Solution:
    def findMinArrowShots(self, points: List[List[int]]) -> int:
        points.sort(key=lambda x: x[1])  # 根據右邊界排序
        arrows = 1
        end = points[0][1]

        for x_start, x_end in points[1:]:
            if x_start > end:  # 氣球不重疊，需要新箭
                arrows += 1
                end = x_end

        return arrows
```

#### 複雜度分析
- **時間複雜度**: $O(n \log n)$，其中 $n$ 是氣球數量，排序操作為主要開銷。

- **空間複雜度**: $O(1)$，除了排序使用的額外空間外，程式只使用了常數額外空間。

</details> 

---

### [763. Partition Labels](https://leetcode.com/problems/partition-labels/)

為了滿足你的貪心策略，是否需要一些預處理？

:::warning

在處理陣列前，統計一遍訊息（如頻率、個數、第一次出現位置、最後一次出現位置等）可以使題目難度大幅降低。

:::

<details>
    <summary>題解</summary>

#### 解題思路

- 計算每個字符最後出現的位置，記錄為 `last` 字典。
- 遍歷字符串，維護當前區間的右邊界 `end`，初始為 `0`，並記錄區間起點 `start`。
- 當遍歷到的字符的最後出現位置超過當前的 `end` 時，更新 `end`。
- 如果當前索引等於 `end`，表示找到了一個劃分區間，將區間長度加入結果列表，並將 `start` 更新為下一個字符的起點。

```python
class Solution:
    def partitionLabels(self, s: str) -> List[int]:
        last = {char: i for i, char in enumerate(s)}  # 記錄每個字符的最後出現位置
        partitions = []
        start = end = 0

        for i, char in enumerate(s):
            end = max(end, last[char])  # 更新當前區間的右邊界，保證當前區間覆蓋所有字符的最後出現位置
            if i == end:  # 當前索引等於區間右邊界，完成一個區間
                partitions.append(end - start + 1)
                start = i + 1  # 更新下一區間的起點

        return partitions
```

#### 複雜度分析
- **時間複雜度**: $O(n)$，其中 $n$ 是字符串的長度，遍歷字符串兩次，一次建立字典，一次劃分區間。

- **空間複雜度**: $O(1)$，只使用了固定大小的字典和變數來儲存訊息。

</details>

---

### [122. Best Time to Buy and Sell Stock II](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/)

股票交易題型裡比較簡單的題目，在不限制交易次數的情況下，怎樣可以獲得最大利潤呢？

<details>
    <summary>題解</summary>

#### 解題思路

- 本題目允許多次交易（先買後賣），目標是最大化利潤。
- **貪婪算法 (Greedy)**：
  - 對於每一天，如果當天的價格高於前一天，就進行一次交易，將差值加入總利潤。
  - 本質上等價於抓住所有上升區間的收益。
- 不需要記錄實際的交易，只需累加所有價格上升的差值。

```python
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        profit = 0
        for i in range(1, len(prices)):
            if prices[i] > prices[i - 1]:
                profit += prices[i] - prices[i - 1]
        return profit
```

#### 複雜度分析
- **時間複雜度**: $O(n)$，其中 $n$ 是 prices 的長度，需遍歷整個價格列表一次。

- **空間複雜度**: $O(1)$，只使用了常數額外空間。

</details>

---

## 進階難度

### [406. Queue Reconstruction by Height](https://leetcode.com/problems/queue-reconstruction-by-height/)

溫馨提示，這道題可能同時需要排序和插入操作。

<details>
    <summary>題解</summary>

#### 解題思路

- **問題描述**:
  給定一組 `(h, k)` 人物對，其中 `h` 是身高，`k` 是在這個人前面身高至少與他相同的人數。根據這些條件，重建排列隊列。

- **貪婪算法**:
  - 將所有人按照 **身高降序** 和 **k 值升序** 排序。
  - 初始化一個空隊列，依次將排序後的人插入隊列的第 `k` 個位置。
  - 由於身高越高的人已經插入，他們對後續的插入順序不產生影響。

```python
class Solution:
    def reconstructQueue(self, people: List[List[int]]) -> List[List[int]]:
        # 按身高降序，k 值升序排序
        people.sort(key=lambda x: (-x[0], x[1]))
        queue = []
        for person in people:
            queue.insert(person[1], person)
        return queue
```

#### 複雜度分析
- **時間複雜度**: $O(n^2)$，其中 $n$ 是 people 的長度。
  - 排序需要 $O(n \log n)$。
  - 插入操作在最壞情況下需要 $O(n^2)$。

- **空間複雜度**: $O(n)$，用於儲存重建的隊列。
</details>

---

### [665. Non-decreasing Array](https://leetcode.com/problems/non-decreasing-array/)

需要仔細思考你的貪心策略在各種情況下，是否仍然是最優解。

<details>
    <summary>題解</summary>

#### 解題思路

- **問題描述**:  
  確認是否可以最多修改一個元素，讓整個陣列成為非遞減（每個元素小於或等於後一個元素）。
  
- **關鍵點**:
  - 遍歷陣列時檢查是否有不符合非遞減的地方（即 `nums[i] > nums[i+1]`）。
  - 每次遇到不符合的情況：
    - 嘗試修改 `nums[i]` 或 `nums[i+1]`，使整體保持非遞減。
    - 如果已經修改過一次，再次出現問題時直接返回 `False`。

- **修改策略**:
  - 如果 `nums[i-1] <= nums[i+1]`，將 `nums[i]` 修改為 `nums[i+1]`。
  - 否則，將 `nums[i+1]` 修改為 `nums[i]`。

```python
class Solution:
    def checkPossibility(self, nums: List[int]) -> bool:
        modified = False  # 是否已經修改過一次
        for i in range(len(nums) - 1):
            if nums[i] > nums[i + 1]:  # 發現不符合非遞減的情況
                if modified:  # 已經修改過一次
                    return False
                # 嘗試修改
                if i == 0 or nums[i - 1] <= nums[i + 1]:
                    nums[i] = nums[i + 1]  # 修改 nums[i]
                else:
                    nums[i + 1] = nums[i]  # 修改 nums[i+1]
                modified = True  # 標記已修改
        return True
```

#### 複雜度分析
- **時間複雜度**: $O(n)$，其中 $n$ 是陣列的長度，只需遍歷陣列一次。

- **空間複雜度**: $O(1)$，只使用了常數額外空間。

</details>