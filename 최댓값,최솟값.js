const a = [10, 4, 3, 6, 11, 30, 13];

// sort
a.sort();
console.log(a); // [ 10, 11, 13, 30, 3,  4,  6 ]
console.log(a[0]); // 10
console.log(a[a.length - 1]); // 6

// Math.max, min
console.log(Math.max(10, 20)); // 20
console.log(Math.max.apply(null, a)); // 30

//apply 작동 원리
let num = a[0];
for (const number of a) {
  if (number > num) num = number;
}
console.log(num);

// < => 3
// > => 30

// 메모리 효율 좋지 않음, 큰 숫자 들어오면 오류남

//reduce

let b = [5, 8, 3, 2, 1];

const reducerOne = (accumulator, currentvalue) => accumulator + currentvalue;
console.log(b.reduce(reducerOne)); // 19

const reducerTwo = (accumulator, currentvalue) => accumulator - currentvalue;
console.log(b.reduce(reducerTwo)); // -3 => 처음 들어온 8은 accumulator가 된다.

const reducerThree = (accumulator, currentvalue) =>
  accumulator > currentvalue ? accumulator : currentvalue;
console.log(b.reduce(reducerThree)); // 8 최댓값

const reducerFour = (accumulator, currentvalue) =>
  accumulator < currentvalue ? accumulator : currentvalue;
console.log(b.reduce(reducerFour)); // 1 최솟값
