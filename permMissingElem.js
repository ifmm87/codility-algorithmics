
// function solution(A) {
//     // write your code in JavaScript (Node.js 8.9.4)
//     if(!A.length) return;
//     if(A.length === 1) return;
//
//     let aux = {};
//     for(let i = 0; i < A.length; i++) {
//         if(!aux[A[i]]) {
//             aux[A[i]] = 1;
//         } else {
//             return ;
//         }
//
//     }
//     for(let i = 1; i <= A.length; i++) {
//         if(!aux[i]) return i;
//      }
//     return null ;
// }
function solution(A) {
  let smallest = 1;
  A = A.sort();
  for(let i = 0; i < A.length; i++) {
    if(A[i] === smallest) {
      smallest ++;
    }
  }
  return smallest;
}
console.log(solution([3,2,1,7,1]))
