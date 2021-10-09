// 배열과 객체는 서로 비슷한 데이터끼리 묶는다는 점이 비슷하지만
// 객체 리터럴은 해당 프로퍼티마다 이름이 있다.
const jungHan = {
  name: "마정한",
  year: 1992,
  month: 3,
  date: 29,
  gender: "M",
  "2 dg": "특수경우",
};
// 일반경인 경우 .접근
console.log(jungHan.name);
console.log(jungHan.year);

// 공백이나 숫자가 먼저 시작되는 특수한 객체 이름일 경우
console.log(jungHan["2 dg"]);

// 프로퍼티 삭제
delete jungHan["2 dg"];

// 객체 내부 수정
jungHan.name = "바보";
