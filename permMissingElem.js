
function solutionA(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    // if(!A.length) return 1;
    // if(A.length === 1) return A[0] - 1;

    let aux = {};
    for(let i = 0; i < A.length; i++) {
      aux[A[i]] = 1;
    }
    for(let i = 1; i <= A.length + 1; i++) {
      if(!aux[i]) return i;
    }
    return 1;
}
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
console.log(solutionA([ 4]))
