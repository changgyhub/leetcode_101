---
sidebar_position: 63
---

# 11.5 練習

## 基礎難度

### [409. Longest Palindrome](https://leetcode.com/problems/longest-palindrome/)

計算一組字符可以構成的回文字符串的最大長度，可以使用其他資料結構進行輔助統計。

---

### [3. Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/)

計算最長無重複子字符串的長度，同樣可以使用其他資料結構進行輔助統計。

---

## 進階難度

### [772. Basic Calculator III](https://leetcode.com/problems/basic-calculator-iii/)

題目 227 的 follow-up，非常推薦練習。

---

### [5. Longest Palindromic Substring](https://leetcode.com/problems/longest-palindromic-substring/)

類似於我們之前講過的子序列問題，子陣列或子字符串問題常常也可以用動態規劃來解決。先用動態規劃寫出一個 $O(n^2)$ 時間複雜度的解法，然後搜索一下 Manacher’s Algorithm，它可以在 $O(n)$ 時間內解決這個問題。