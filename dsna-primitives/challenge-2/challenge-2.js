function titleCase(sentence) {
  const lowerCase = sentence
    .toLowerCase()
    .split(' ')
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');
  return lowerCase;
}

// console.log('titleCase', titleCase('alchemy ROCKS goLD'));
