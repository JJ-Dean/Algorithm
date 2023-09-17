// 영하네 반은 국어, 수학, 영어 시험을 보았습니다. 영하는 친구들의 평균 점수를 구해주기로 했습니다.

// 공백으로 구분하여 세 과목의 점수가 주어지면 전체 평균 점수를 구하는 프로그램을 작성하세요.
// 단, 소숫점 자리는 모두 버립니다.

// 입출력

// 입력 : 20 30 40
// 출력 : 30

let score = '20 30 40';
const scoreArr = score.split(' ');

let sum = 0;

for (let score of scoreArr) {
  console.log(score);
  sum += parseInt(score);
}

console.log(Math.floor(sum / 3));

// 입력 받은 숫자가 문자열인 경우
// 문자열의 숫자들을 분리하여 배열에 저장한다.
// for of 반복문으로 배열의 요소들을 꺼내어 sum 변수에 저장했다.
// 평균 점수를 구하기 윟해 모든 과목의 총점이 저장된 sum 변수를 3으로 나누고
// 소수점 이하 자리를 모두 버리기 위해 Math.floor 내장함수를 사용했다.
