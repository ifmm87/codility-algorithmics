function solution (A) {
  
  let total = A.reduce((a, b) => {
    return a + b;
  });
  let partials = [];
  let sum = 0;
  for(let i= 0; i < A.length -1; i++) {
    sum += A[i];
    partials[i] = Math.abs((total - sum) - sum );
  }
  return Math.min(...partials);
}

console.log(solution([3,1,2,4,3]))
