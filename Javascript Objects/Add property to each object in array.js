function myFunction(arr, str) {
  return arr.map((obj) => ({ ...obj, continent: str }));
}
