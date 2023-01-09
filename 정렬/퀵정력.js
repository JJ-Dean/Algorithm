let inputArr = [66, 77, 54, 32, 10, 5, 11, 15];

function quick(inputArr) {
  let inputLength = inputArr.length;
  if (inputLength <= 1) {
    return inputArr;
  }
  let pivot = [inputArr.shift()];
  let groupOne = [];
  let groupTwo = [];

  for (let i in inputArr) {
    if (inputArr[i] < pivot) {
      groupOne.push(inputArr[i]);
    } else {
      groupTwo.push(inputArr[i]);
    }
  }

  return quick(groupOne).concat(pivot, quick(groupTwo));
}

console.log(quick(inputArr));
