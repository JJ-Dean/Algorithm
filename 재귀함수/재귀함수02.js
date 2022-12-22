// 2진수 변환

// 반복문
let result = '';
let x = 11;
while (true) {
  if (x % 2 == 0) {
    result += '0';
  } else {
    result += '1';
  }
  x = Math.floor(x / 2);
  //   Math.ceil() : 소수점 올림
  //   Math.floor() : 소수점 버림
  //   Math.round() : 소수점 반올림
  if (x == 1 || x == 0) {
    result += String(x);
    break;
  }
}
console.log(x); // 1
console.log(result); // 1101
console.log(result.split('')); // [ '1', '1', '0', '1' ]
console.log(result.split('').reverse()); // [ '1', '0', '1', '1' ]
console.log(result.split('').reverse().join('')); // 1011

// 재귀함수
function 이진법(숫자) {
  if (숫자 == 1 || 숫자 == 0) {
    return String(숫자);
  }
  return 이진법(Math.floor(숫자 / 2)) + String(숫자 % 2);
}

console.log(이진법(11));

// 연습
let result2 = '';
let num = 8;
while (true) {
  if (num % 2 == 0) {
    result2 += '0';
  } else {
    result2 += '1';
  }

  num = Math.floor(num / 2);

  if (num == 0 || num == 1) {
    result2 += String(num);
    break;
  }
}
console.log(result2);
console.log(result2.split('').reverse().join(''));

// 연습2
function jh(num) {
  if (num == 0 || num == 1) {
    return String(num);
  }

  return jh(Math.floor(num / 2)) + String(num % 2);
}

console.log(jh(8));
