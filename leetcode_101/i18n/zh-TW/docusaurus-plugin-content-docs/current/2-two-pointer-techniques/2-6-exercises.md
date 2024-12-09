---
sidebar_position: 10
---

# 2.6 練習

## 基礎難度

### [633. Sum of Square Numbers](https://leetcode.com/problems/sum-of-square-numbers/)

Two Sum 題目的變形題之一。

<details>
    <summary>題解</summary>

#### 解題思路

- 本題需要判斷是否存在兩個非負整數 $a$ 和 $b$，使得 $a^2 + b^2 = c$，其中 $c$ 是輸入的整數。
- **雙指針法**：
  1. 設置兩個指針：左指針 $a = 0$，右指針 $b = \lfloor \sqrt{c} \rfloor$。
  2. 計算當前平方和 $a^2 + b^2$：
     - 如果 $a^2 + b^2 = c$，返回 `True`。
     - 如果 $a^2 + b^2 < c$，增加 $a$。
     - 如果 $a^2 + b^2 > c$，減少 $b$。
  3. 如果指針相交且沒有找到結果，返回 `False`。

```python
class Solution:
    def judgeSquareSum(self, c: int) -> bool:
        a, b = 0, int(c**0.5)  # 初始化指針
        while a <= b:
            square_sum = a * a + b * b
            if square_sum == c:
                return True
            elif square_sum < c:
                a += 1  # 增加左指針
            else:
                b -= 1  # 減少右指針
        return False
```

#### 複雜度分析

- **時間複雜度**: $O(\sqrt{c})$，指針從兩端向中間收攏，最多執行 $\sqrt{c}$ 次迭代。
- **空間複雜度**: $O(1)$，僅使用了固定數量的變數。

</details>


---

### [680. Valid Palindrome II](https://leetcode.com/problems/valid-palindrome-ii/)

Two Sum 題目的變形題之二。

<details>
    <summary>題解</summary>

#### 解題思路

- 本題需要判斷一個字符串是否可以通過刪除最多一個字符後，成為回文字符串。
- **雙指針法**：
  1. 設置左右指針 `l` 和 `r`，分別指向字符串的頭部和尾部。
  2. 如果 `s[l] == s[r]`，則將指針向中間移動。
  3. 如果 `s[l] != s[r]`：
     - 刪除左邊字符（檢查子串 `s[l+1:r+1]`）或右邊字符（檢查子串 `s[l:r]`）。
     - 如果任意一個子串是回文，則返回 `True`。
  4. 如果左右指針正常移動到中間，說明原字符串是回文，返回 `True`。

- **輔助函數**：
  使用一個函數檢查子串是否是回文。

```python
class Solution:
    def validPalindrome(self, s: str) -> bool:
        def is_palindrome(sub: str) -> bool:
            return sub == sub[::-1]
        
        l, r = 0, len(s) - 1
        while l < r:
            if s[l] == s[r]:
                l += 1
                r -= 1
            else:
                return is_palindrome(s[l+1:r+1]) or is_palindrome(s[l:r])
        return True
```

#### 複雜度分析

- **時間複雜度**: $O(n)$，其中 $n$ 是字符串的長度。主迴圈遍歷字符串一次，檢查回文子串的操作最多進行一次，總計為線性時間。
- **空間複雜度**: $O(1)$，除了輔助函數外，未使用額外空間。

</details>

---

### [524. Longest Word in Dictionary through Deleting](https://leetcode.com/problems/longest-word-in-dictionary-through-deleting/)

合併兩個有序陣列的變形題。

<details>
    <summary>題解</summary>

#### 解題思路

- 本題要求找出可以通過刪除字符串中若干字符而得到的最長單詞。如果有多個單詞的長度相同，返回字典序最小的單詞。
- **雙指針法**：
  1. 對字典中的單詞列表按長度降序、字典序升序排序，保證先處理最長且字典序最小的單詞。
  2. 遍歷排序後的單詞列表，檢查每個單詞是否是給定字符串的子序列。
  3. 使用雙指針檢查是否為子序列：
     - 指針 `i` 遍歷字符串 `s`，指針 `j` 遍歷目標單詞。
     - 如果 `s[i] == word[j]`，則移動 `j`。
     - 如果 `j` 能到達目標單詞的末尾，說明該單詞是子序列。

- 返回第一個滿足條件的單詞。

```python
class Solution:
    def findLongestWord(self, s: str, dictionary: List[str]) -> str:
        def is_subsequence(word: str, s: str) -> bool:
            i, j = 0, 0
            while i < len(s) and j < len(word):
                if s[i] == word[j]:
                    j += 1
                i += 1
            return j == len(word)
        
        dictionary.sort(key=lambda x: (-len(x), x))  # 長度降序，字典序升序
        for word in dictionary:
            if is_subsequence(word, s):
                return word
        return ""
```

#### 複雜度分析

- **時間複雜度**: $O(m \cdot n)$，其中 $m$ 是字典中單詞的數量，$n$ 是字符串 `s` 的長度。排序的複雜度為 $O(m \log m)$，每個單詞的子序列檢查需要 $O(n)$。
- **空間複雜度**: $O(1)$，除了排序和雙指針檢查外，未使用額外空間。

</details>


---

## 進階難度

### [340. Longest Substring with At Most K Distinct Characters](https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/)

需要利用其他數據結構方便統計當前的字符狀態。

<details>
    <summary>題解</summary>

#### 解題思路

- 本題要求找到字串中最多包含 $k$ 種不同字元的最長子字串，適合使用 **滑動窗口法**：
  1. 使用雙指針 `l` 和 `r` 表示當前窗口的左右邊界，並用 `defaultdict(int)` 記錄窗口中每個字元的出現次數。
  2. 當窗口中的字元種類數量超過 $k$ 時，通過移動左指針 `l` 縮小窗口，直到字元種類數量不超過 $k$。
  3. 在每一步中，更新最長子字串的長度。

- **步驟**：
  1. 初始化一個 `defaultdict(int)` 來記錄字元出現次數。
  2. 右指針 `r` 向右移動，將字元加入窗口，更新次數。
  3. 當窗口內字元種類數量超過 $k$，左指針 `l` 向右移動，直到種類數量不超過 $k$。
  4. 在每一步中記錄當前窗口的長度，並更新最長子字串的長度。

```python
from collections import defaultdict

class Solution:
    def lengthOfLongestSubstringKDistinct(self, s: str, k: int) -> int:
        if k == 0 or not s:
            return 0

        freq = defaultdict(int)
        l, max_length = 0, 0
        
        for r in range(len(s)):
            freq[s[r]] += 1  # 更新右指針字元出現次數
            
            while len(freq) > k:  # 縮小窗口直到字元種類不超過 k
                freq[s[l]] -= 1
                if freq[s[l]] == 0:
                    del freq[s[l]]
                l += 1
            
            max_length = max(max_length, r - l + 1)  # 更新最長長度
        
        return max_length
```

#### 複雜度分析

- **時間複雜度**: $O(n)$，其中 $n$ 是字串的長度。右指針遍歷字串一次，左指針最多遍歷字串一次。
- **空間複雜度**: $O(k)$，雜湊表最多儲存 $k$ 種字元及其出現次數。

</details>
