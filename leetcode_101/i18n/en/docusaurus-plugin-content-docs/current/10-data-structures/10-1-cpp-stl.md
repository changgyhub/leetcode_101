---
sidebar_position: 48
---

# 10.1 C++ STL

When solving problems, we almost always rely on various data structures to assist us. Therefore, we must familiarize ourselves with the characteristics of each data structure. C++ STL provides several data structures (the actual underlying implementation may vary depending on the compiler):

1. **Sequence Containers**: Containers that maintain order.
   1. **vector**: A `dynamic array`, one of the most frequently used data structures, ideal for $O(1)$ random access. Since most algorithms have a time complexity greater than $O(n)$, we often use vectors to store various data or intermediate results. As insertion and deletion at the tail have $O(1)$ complexity, it can also be used as a stack.
   2. **list**: A `doubly linked list`, which can also be used as a stack or queue. However, since LeetCode problems often use Nodes to represent linked lists, and linked lists do not support fast random access, this data structure is rarely used. An exception is the classic LRU problem, where the characteristics of linked lists are utilized, as discussed later.
   3. **deque**: A double-ended queue, a powerful data structure that supports $O(1)$ random access and $O(1)$ insertion and deletion at both ends. It can be used as a stack or queue but comes with some overhead. It can also approximate a doubly linked list.
   4. **array**: A fixed-size array, generally not used in competitive programming.
   5. **forward_list**: A singly linked list, which is also generally not used in competitive programming.

2. **Container Adaptors**: Containers implemented on top of other containers.
   1. **stack**: A `Last In First Out (LIFO)` data structure, implemented using deque by default. It is commonly used for depth-first search, certain string matching problems, and monotonic stack problems.
   2. **queue**: A `First In First Out (FIFO)` data structure, implemented using deque by default. It is commonly used for breadth-first search.
   3. **priority_queue**: A `priority queue (max-heap by default)` data structure, implemented using a vector as a heap. It supports sorting arrays in $O(n \log n)$ time, inserting any value in $O(\log n)$ time, retrieving the maximum value in $O(1)$ time, and deleting the maximum value in $O(\log n)$ time. priority_queue is used to maintain data structures and retrieve maximum values efficiently, and it allows custom comparison functions. For example, by storing negative values or changing the comparison function, a min-heap can be implemented.

3. **Ordered Associative Containers**: Ordered associative containers.
   1. **set**: An ordered set where elements are unique, implemented using a red-black tree, a specialized Binary Search Tree (BST). It supports sorting arrays in $O(n \log n)$ time, inserting, deleting, or finding any value in $O(\log n)$ time, and retrieving the minimum or maximum value in $O(\log n)$ time. Note that both set and priority_queue can be used to maintain data structures and retrieve maximum or minimum values efficiently, but their time complexities and functionalities differ slightly. For instance, priority_queue does not support arbitrary value deletion by default, whereas set's time complexity for retrieving maximum or minimum values is slightly higher. The choice depends on specific requirements.
   2. **multiset**: A set that allows duplicate elements.
   3. **map**: An `ordered map or ordered table`, which extends set by associating each key with a value.
   4. **multimap**: A map that allows duplicate keys.

4. **Unordered Associative Containers**: Containers with unordered associations.
   1. **unordered_set**: A `hash set` that allows for $O(1)$ time complexity for insertion, lookup, and deletion of elements. It is commonly used to quickly check if an element exists in the container.
   2. **unordered_multiset**: A hash set that supports duplicate elements.
   3. **unordered_map**: A `hash map` or `hash table` that extends unordered_set by mapping each key to a value. In some cases, if the range of keys is known and small, a vector can be used as a replacement for unordered_map, using the index to represent the key and the value at that index to represent the value.
   4. **unordered_multimap**: A hash map that supports duplicate keys.

Since this is not a book on C++ fundamentals, more details about STL can be found through further research. Understanding the principles and usage of these data structures is crucial for solving algorithm and data structure problems effectively.

