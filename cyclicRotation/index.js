function solution(A, K) {
  if (!A) return 0;
  if (K < 1) return A;
  let newA = [];
  if (K > A.length) K = K % A.length
  A.forEach((value, index) => {
    if (index + K < A.length) {
      newA[index + K] = value;
    } else {
      newA[(index + K) - A.length] = value;
    }
  })
  return newA;
}
module.exports = solution;
// console.log(solution([1,2,3,4], 3));
