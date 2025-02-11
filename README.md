# Unexpected Behavior when checking for null in function foo

This repository demonstrates a potential bug in a JavaScript function that checks for null values. The function `foo` attempts to handle null values but might behave unexpectedly with objects that have a length property. 

## Bug Description

The `foo` function is intended to return 0 if the input `x` is null, and the length of `x` otherwise. However, if `x` is an object with a `length` property (but is not an array or string), the function will return that length instead of handling it as a null or undefined case.

## Bug Reproduction

The `bug.js` file contains the buggy code. You can run the code to observe the unexpected behavior when non-array/string objects with length property is passed.

## Solution

The `bugSolution.js` file demonstrates the corrected version. Instead of just checking `x === null`, it uses `typeof x !== 'object' || x === null` or checks if it's an array or string before accessing `length` property.