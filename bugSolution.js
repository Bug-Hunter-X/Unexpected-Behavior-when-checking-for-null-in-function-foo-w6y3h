function foo(x) {
  if (typeof x !== 'object' || x === null) {
    return 0;
  }
  if (Array.isArray(x) || typeof x === 'string') {
    return x.length;
  } else {
    return -1; //or throw an error
  }
}
//Another solution
function foo(x) {
  if (x === null || (typeof x === 'object' && !Array.isArray(x) && typeof x !== 'string')) {
      return 0;
  }
  return x.length;
} 