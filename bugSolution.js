function foo(a) {
  if (a === null) {
    return 0; 
  } else if (a === undefined) {
    return -1; // Or handle undefined differently 
  }
  return a + 1;
}

console.log(foo(null)); // Output: 0
console.log(foo(undefined)); // Output: -1