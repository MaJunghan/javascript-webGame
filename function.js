// 함수 선언문   function a () {}
// 익명함수 const a  = function () {}
// arrow function const a = () = > {}

function a() {
  // 함수는 기본적으로 undefined 반환
  // return 은 무조건 1개의 값만 리턴
  // 그래서 배열이나 객체에 담아서 리턴
  return [1, 2, 3];
}

console.log(a());
