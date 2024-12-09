---
sidebar_position: 43
---

# 8.6 練習

## 基礎難度

### [168. Excel Sheet Column Title](https://leetcode.com/problems/excel-sheet-column-title/)

7 進制轉換的變種題，需要注意的一點是從 1 開始而不是 0。

---

### [67. Add Binary](https://leetcode.com/problems/add-binary/)

字符串加法的變種題。

---

### [238. Product of Array Except Self](https://leetcode.com/problems/product-of-array-except-self/)

你可以不使用除法做這道題嗎？我們很早之前講過的題目 135 或許能給你一些思路。

---

## 進階難度

### [462. Minimum Moves to Equal Array Elements II](https://leetcode.com/problems/minimum-moves-to-equal-array-elements-ii/)

這道題是筆者最喜歡的 LeetCode 題目之一，需要先推理出怎麼樣移動是最優的，再考慮如何進行移動。你或許需要一些前些章節講過的算法。

---

### [169. Majority Element](https://leetcode.com/problems/majority-element/)

如果想不出簡單的解決方法，搜尋一下 Boyer-Moore Majority Vote 算法吧。

---

### [470. Implement Rand10() Using Rand7()](https://leetcode.com/problems/implement-rand10-using-rand7/)

如何用一個隨機數生成器生成另一個隨機數生成器？你可能需要利用原來的生成器多次。

---

### [202. Happy Number](https://leetcode.com/problems/happy-number/)

你可以簡單的用一個 `while` 循環解決這道題，但是有沒有更好的解決辦法？如果我們把每個數字想像成一個節點，是否可以轉化為環路檢測？