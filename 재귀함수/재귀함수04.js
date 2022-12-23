// 피보나치 순열
// 1 1 2 3 5 8 13 21 34

// 반복문
let a = 1;
let b = 1;
for (let i = 0; i < 6; i++) {
  let c = a + b;
  a = b;
  b = c;
}

console.log(b);

//재귀함수
function pn(num) {
  if (num == 1 || num == 2) {
    return 1;
  }
  return pn(num - 1) + pn(num - 2);
}
console.log(pn(5));
