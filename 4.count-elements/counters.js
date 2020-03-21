
function solution(N, A) {
  let counters = Array(N).fill(0);
  let max = 0;
  let lastMax = max;
  for(let i = 0; i < A.length; i++) {
    if (A[i] >= 1 && A[i] <= N) {
      if (counters[A[i] - 1] > lastMax) counters[A[i] -1] ++;
        else counters[A[i] -1] = lastMax +1;
      if (counters[A[i] -1] > max) {
        max = counters[A[i] - 1];
      }
    } else if (A[i] === N + 1) {
      lastMax = max;
      // counters = Array(N).fill(max);
    }
    console.log(counters, lastMax);
  }
  for( let i = 0; i < A.length; i++ ) {
    if ( counters[i] < lastMax ) {
      counters[i] = lastMax;
    }
  }
  return counters;
}

console.log('=====', solution(5, [3,4,4,6,1,4,4,6]));
