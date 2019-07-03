# from math import sqrt, floor, log
# from decimal import Decimal
from bisect import bisect

# phi = (1 + Decimal(5).sqrt()) / 2

# def reverse_fib(val): # 2
#     return floor(
#         log(val * sqrt(5) + 1/2, phi)
#     )

# def floor_divide_three(val):
#     return val // 3

even_fibs = [
    2, 8, 34, 144, 610, 2584, 10946, 46368, 196418, 832040, 3524578, 14930352,               63245986, 267914296, 1134903170, 4807526976, 20365011074, 86267571272,                   365435296162, 1548008755920, 6557470319842, 27777890035288, 117669030460994,             498454011879264, 2111485077978050, 8944394323791464, 37889062373143906
]

t = int(input().strip())
for i in range(t):
    N = int(input().strip())
    # fib_num = reverse_fib(N)
    # even_fib_num = floor_divide_three(fib_num)
    # sum_of_even_fibs = sum(even_fibs[0:even_fib_num])
    # print(sum_of_even_fibs)

    print(sum(even_fibs[:bisect(even_fibs, N)]))

