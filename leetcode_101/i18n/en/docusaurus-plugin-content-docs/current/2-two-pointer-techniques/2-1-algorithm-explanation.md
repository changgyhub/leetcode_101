---
sidebar_position: 5
---

# 2.1 Algorithm Explanation

The two-pointer technique is primarily used for traversing arrays, where two pointers point to different elements to collaborate on a task. It can also be extended to multiple pointers across multiple arrays.

If two pointers point to the same array and move in the same direction without intersecting, this is also known as a sliding window (the area between the two pointers represents the current window), often used for interval searching.

If two pointers point to the same array but move in opposite directions, they can be used for searching, especially when the array is sorted.

In C++, pay attention to the position of `const` as it affects the pointer’s behavior:

```cpp
int x;
int * p1 = &x; // The pointer and the value can both be modified
const int * p2 = &x; // The pointer can be modified, but the value cannot (const int)
int * const p3 = &x; // The pointer cannot be modified (* const), but the value can
const int * const p4 = &x; // Neither the pointer nor the value can be modified
```
