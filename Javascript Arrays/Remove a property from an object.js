function myFunction(obj) {
  const { b, ...rest } = obj;
  return rest;
}
