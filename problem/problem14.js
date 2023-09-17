// 문장이 입력되면 거꾸로 출력하는 프로그램을 만들어 봅시다.

function reverse(text) {
  const textArr = text.split('');
  textArr.reverse();
  console.log(textArr);

  console.log(textArr.join(''));
}

reverse('거꾸로');

// 문자열을 split으로 배열로 만듦.
// 배열.reverse 로 배열의 요소들의 순서를 거꾸로 바꿈
// 거꾸로 바꿔진 배열을 다시 join으로 붙여서 문자열로 만듧
