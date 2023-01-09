let inputAr = [5, 10, 66, 77, 54, 33, 11, 15];

// function 병합정렬(inputArr) {
//   let inputArrLength = inputArr.length;

//   if (inputArrLength <= 1) {
//     return inputArr;
//   }

//   let middleNum = parseInt(inputArrLength / 2);
//   let groupOne = 병합정렬(inputArr.slice(0, middleNum));
//   let groupTwo = 병합정렬(inputArr.slice(middleNum));
//   return `그룹 하나 : ${groupOne}, 그룹 둘 : ${groupTwo} \n`;
// }

function 병합정렬(inputArr) {
  let inputArrLength = inputArr.length;
  let resultArr = [];
  if (inputArrLength <= 1) {
    return inputArr;
  }

  let middleNum = parseInt(inputArrLength / 2);
  let groupOne = 병합정렬(inputArr.slice(0, middleNum));
  let groupTwo = 병합정렬(inputArr.slice(middleNum));

  while (groupOne.length != 0 && groupTwo.length != 0) {
    if (groupOne[0] < groupTwo[0]) {
      resultArr.push(groupOne.shift());
    } else {
      resultArr.push(groupTwo.shift());
    }
  }

  while (groupOne.length != 0) {
    resultArr.push(groupOne.shift());
  }

  while (groupTwo.length != 0) {
    resultArr.push(groupTwo.shift());
  }
  return resultArr;
}

console.log(병합정렬(inputAr));
