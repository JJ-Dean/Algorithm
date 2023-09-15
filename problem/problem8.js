// 크리스마스 날, 은비는 친구들과 함께 파티를 하기로 했습니다. 그런데, 크리스마스 트리를 사는 것을 깜빡하고 말았습니다. 온 가게를 돌아다녀 봤지만 크리스마스 트리는 모두 품절이었습니다.
// 하는 수 없이 은비는 프로그래밍으로 트리를 만들기로 합니다.

let input = 5;

for (let i = 1; i <= input; i++) {
  let result = '';
  // 공백 생성
  for (let k = 1; k <= input - i; k++) {
    result += ' ';
  }
  // 별 증가
  for (let j = 1; j <= i * 2 - 1; j++) {
    result += '*';
  }

  console.log(result);
}
