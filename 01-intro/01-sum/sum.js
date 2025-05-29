export default function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('Use numbers for sum!')
  }
  return a + b;
}
