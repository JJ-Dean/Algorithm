let a = [10, 20, 9, 2, 1, 6, 11, 19];
let result = [];

for (let i = 0; i < 8; i++) {
  result.push(Math.min.apply(null, a));

  a.splice(a.indexOf(Math.min.apply(null, a)), 1);
  console.log(result);
}
// [ 1 ]
// [ 1, 2 ]
// [ 1, 2, 6 ]
// [ 1, 2, 6, 9 ]
// [ 1, 2, 6, 9, 10 ]
// [ 1, 2, 6, 9, 10, 11 ]
// [
//    1,  2,  6, 9,
//   10, 11, 19
// ]
// [
//    1,  2,  6,  9,
//   10, 11, 19, 20
// ]
