---
sidebar_position: 49
---

# 10.2 Python Common Data Structures

Similar to C++ STL, Python also provides various data structures (the underlying details may vary depending on the implementation):

1. **Sequence Containers**: Containers that maintain order.
   1. **list**: A `dynamic array`, one of the most commonly used data structures for $O(1)$ random access. Since most algorithm complexities exceed $O(n)$, lists are frequently used to store data or intermediate results. As adding or removing elements at the end has $O(1)$ complexity, lists can also be used as stacks.
   2. **tuple**: An `immutable list`, where neither the elements nor the length can be modified.
   3. **collections.deque**: A `double-ended queue`, a powerful data structure supporting $O(1)$ random access as well as $O(1)$ insertion and deletion at both ends (making it useful as a stack or queue). It has some overhead but can approximate a doubly linked list.

2. **Container Adaptors**: Containers built on top of other data structures.
   1. **heapq**: A `min-heap` (a data structure where the smallest element is accessed first), implemented using lists. It supports array sorting in $O(n \log n)$, value insertion in $O(\log n)$, access to the smallest value in $O(1)$, and deletion of the smallest value in $O(\log n)$. `heapq` is often used for maintaining data structures and quickly accessing the smallest value, but it doesn't support custom comparison functions. Typically, we precompute the custom values and store them as tuples, like `(custom_value, index)`, in the heap. This way, tuple comparisons are done from left to right, comparing the custom value first and then the insertion order.

3. **Ordered Associative Containers**:
   1. **collections.OrderedDict**: `Ordered mapping or ordered table`. Note that "Ordered" here means maintaining the insertion order, unlike C++'s map, which sorts keys by size. `OrderedDict` is particularly useful for implementing LRU (Least Recently Used) caching.

4. **Unordered Associative Containers**:
   1. **set**: `Hash set`. Allows for fast insertion, lookup, and deletion of elements in O(1) time. Commonly used to quickly check if an element exists in the container.
   2. **dict**: `Hash map or hash table`. Builds upon the set structure by adding key-value mapping. In some scenarios, if the key range is known and small, a list can replace a dict, using indices to represent keys and list values for their corresponding values.
   3. **collections.Counter**: `Counter`. A specialized version of dict that accepts a list and counts the frequency of each element. Keys are the element values, and values are their frequencies. This can serve as a multiset.

Similarly, since this is not a book on Python internals, readers are encouraged to explore more details about these data structures. Understanding their principles and usage will enable more effective problem-solving in algorithms and data structures.
