---
sidebar_position: 44
---

# 9.1 Common Techniques

`Bit manipulation` is a unique category in algorithm problems. By leveraging the characteristics of binary bit operations, we can achieve fascinating optimizations and calculations. Here are some common bitwise operators and their functions:


- `∧`: Bitwise XOR
- `&`: Bitwise AND
- `|`: Bitwise OR
- `~`: Bitwise NOT
- `<<`: Arithmetic left shift
- `>>`: Arithmetic right shift

Below are some commonly used bitwise properties, where `0s` and `1s` represent binary numbers composed entirely of `0` or `1`, respectively:

```
x ^ 0s = x      x & 0s = 0     x | 0s = x
x ^ 1s = ~x     x & 1s = x     x | 1s = 1s
x ^ x = 0       x & x = x      x | x = x
```


Additionally, here are some frequently used techniques:

1. **Remove the lowest set bit**: `n & (n - 1)`
   - This operation removes the lowest `1` in the binary representation of `n`. For example:
     ```
     n = 11110100
     n - 1 = 11110011
     n & (n - 1) = 11110000
     ```

2. **Retrieve the lowest set bit**: `n & (-n)`
   - This operation isolates the lowest `1` in the binary representation of `n`. For example:
     ```
     n = 11110100
     -n = 00001100
     n & (-n) = 00000100
     ```

These are the commonly used bit manipulation tricks. For those interested, there are more advanced techniques worth exploring, but they will not be covered here.
