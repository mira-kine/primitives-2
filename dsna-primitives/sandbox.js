function anagrams(wordOne, wordTwo) {
  // return true if anagrams -> contain the exact same letters
  // false otherwise
  const one = wordOne.split('').sort().join('');
  const two = wordTwo.split('').sort().join('');
  // [] [alphabetized]
  one === two ? 'true' : 'false';
}
