export default function cleanSet(set, startString) {
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }

  const startStringLen = startString.length;

  return [...set].filter((str) => str.startsWith(startString))
    .map((str) => str.slice(startStringLen)).join('-');
}
