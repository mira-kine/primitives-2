function uniqueChar(string) {
  // break into an array and then sort
  const chars = string.split('').sort();
  // loop through characters in array
  for (let i = 0; i < chars.length; i++) {
    const prev = chars[i - 1];
    const current = chars[i];
    // where does current character NOT equal previous and next
    const next = chars[i + 1];
    if (current !== prev && current !== next) return current;
  }
}
