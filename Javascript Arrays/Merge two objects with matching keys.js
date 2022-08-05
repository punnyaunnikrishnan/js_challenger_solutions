function myFunction(x, y) {
  const { b, ...rest } = y;
  return { ...x, ...rest, d: b };
}
