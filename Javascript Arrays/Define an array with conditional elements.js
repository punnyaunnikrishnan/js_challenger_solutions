function myFunction(arr, num) {
  return [...(num > 5 ? [num] : [0]), ...arr];
}
