function at(arr, index) {
  const negative = index < 0;
  if (negative) {
    return arr[arr.length + index];
  } else {
    return arr[index];
  }
}

const arr = ['a', 'b', 'c', 'd', 'e'];
const index = 1;
// console.log(at(arr, index));
