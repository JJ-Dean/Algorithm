let a = [10, 5, 66, 9, 23, 44, 53, 2, 11];
let resultArr = [];
let aLength = a.length;

function 삽입값이들어갈index(resultArr, 삽입값) {
  for (let i in resultArr) {
    if (삽입값 < resultArr[i]) return i;
  }
  return resultArr.length;
}

for (let i = 0; i < aLength; i++) {
  let 삽입값 = a.shift();
  let index = 삽입값이들어갈index(resultArr, 삽입값);
  resultArr.splice(index, 0, 삽입값);
}

console.log(resultArr);
