#!/bin/python3
import sys
import math
from decimal import Decimal

def arithmatic_progression(baseValue):
    return (baseValue * (baseValue+1)) / Decimal(2)

def summation(targetValue, scalar):
    # summation = scalar * scalar + 1
    baseValue = math.floor(targetValue / (scalar))
    summation = scalar * arithmatic_progression(baseValue)
    return summation

def calc(n):
    # target number divided by 3, 5, 15 removed for colisions.
    return summation(n, 3) + summation(n, 5) - summation(n, 15)

t = int(input().strip())
for a0 in range(t):
    n = int(input().strip())
    print(math.trunc(calc(n-1)))


