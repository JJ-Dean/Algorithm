//자바스크립트 객체를 다음과 같이 만들었다.
//출력값을 입력하시오. (출력값은 공백을 넣지 않습니다. )

var d = {
  height: 180,
  weight: 78,
  weight: 84,
  temperature: 36,
  eyesight: 1,
  age: 13,
  'pet-kind': 'dog',
};

console.log(d['weight']);

// 정답 : 84
// 내 의견 : 객체 d 는 'weight' key 가 중복됐다.
// 이떄, 나중에 선언된 'weight: 84' 가 먼저 선언된 weight를 덮어쓰기 한다.

// 추가
// d['age'] 처럼 접근 가능하지만
// d.age도 접근 가능.
