// 인수보다 파라미터가 많은 경우 기본값 출력 > undefined
// function add(a, b, c, d) {
//   // 파라미터
//   console.log(a, b, c, d);
// }

add("hello", "bey", "coffee"); // 인수

// 파라미터에서 받을 변수가 3개이므로 , 마지막값은 출력안됨.
// 인수가 파라미터보다 더 많은 경우
function add(a, b, c) {
  console.log(a, b, c);
}
add("hello", "bey", "coffee", "bus");
