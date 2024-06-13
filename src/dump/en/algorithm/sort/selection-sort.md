# Selection Sort

## Introduction

First of all, find the minimum element of the array and swap it with the first position in the array. Then, find the minimum element in the remaining part of the array and swap it with the second position in the array. Repeat this process until the array is sorted.

This method is called Selection Sort because it continually selects the minimum element in the array.

## Features

**Running time is not dependent on the input.**

Scanning the array for the minimum element cannot provide any information for the next scan. The running time of a sorted array is equal to that of a random array.

**The number of element swaps is minimal.**

Selection sort requires N swaps because it changes two values in the array with each swap.

The number of swaps has a linear relationship with the size of the array.