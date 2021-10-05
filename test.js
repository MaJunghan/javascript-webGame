const arr = ["가", "라", "다", "라", "마", "라"];

//  '라'를 모두 제거하라
let index = "";
for (i = 0; i < arr.length; i++) {
  index = arr.indexOf("라");
  arr.splice(index, 1);
  console.log(arr);
}
