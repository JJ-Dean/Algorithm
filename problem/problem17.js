//# 문제19 : 제곱을 구하자

// 공백으로 구분하여 두 숫자 a와 b가 주어지면, a의 b승을 구하는 프로그램을 작성하세요

// 입력 : 2 3
// 출력 : 8

let num = '2 3';
let numArr = num.split(' ');

let result = 1;

for (let i = 0; i < parseInt(numArr[1], 10); i++) {
  result *= parseInt(numArr[0], 10);
}

console.log(result);

// Math.pow 내장함수 사용시
console.log(Math.pow(parseInt(numArr[0], 10), parseInt(numArr[1], 10)));
