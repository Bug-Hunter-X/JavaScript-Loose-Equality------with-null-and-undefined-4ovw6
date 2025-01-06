# JavaScript Loose Equality with null and undefined

This repository demonstrates an uncommon JavaScript bug related to loose equality (==) when comparing null and undefined with other values.

## Bug Description
The provided JavaScript code uses loose equality (==) to compare the input parameter 'a' with null.  This comparison results in unexpected behavior. When 'a' is null, the function correctly returns 0. However, when 'a' is undefined, the function returns NaN. The issue stems from the fact that loose equality doesn't always behave predictably when comparing null and undefined, resulting in inconsistent outcomes.

## Solution
Using strict equality (===) provides more consistent and predictable results when dealing with null and undefined values in JavaScript comparisons, eliminating the inconsistent outputs based on whether the parameter was null or undefined.