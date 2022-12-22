// 재귀함수
// 내가 나를 호출하는 함수
// 반복문 <-> 재귀함수
// 반복문으로 표현 가능한 것은 재귀함수로 표현 가능하고
// 그 반대도 성립한다.

// 반복문을 이용한 1부터 100까지의 합
let n = 100;
let s = 0;
for (let i = 1; i < n + 1; i++) {
  s += i;
}
console.log(s); // 5050
// O(n)

console.log((n * (n + 1)) / 2); // 5050
// O(1)

// 반복문을 이용한 1부터 6까지의 곱
let m = 1;

for (let i = 1; i < 6; i++) {
  m *= i;
}
console.log(m); // 120
