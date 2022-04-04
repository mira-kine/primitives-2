const word = 'word';
const letters = word.split('');
console.log('letters', letters);

function reverseTitleCase(sentence) {
  return sentence
    .split(' ')
    .map((word) => {
      return word[0].toLowerCase() + word.slice(1).toUpperCase();
    })
    .join(' ');
}

console.log(reverseTitleCase('Here is a sentence'));
