
function solution(N, A) {
  let counters = Array(N).fill(0);
  let max = 0;
  for(let i = 0; i < A.length; i++) {
    if (A[i] >= 1 && A[i] <= N) {
      counters[A[i] -1] ++;
      if (counters[A[i] -1] > max) {
        max = counters[A[i] - 1];
      }
    } else if (A[i] === N + 1) {
      counters = Array(N).fill(max);
    }
  }
  return counters;
}


console.log(solution(5, [3,4,4,6,1,4,4]));
