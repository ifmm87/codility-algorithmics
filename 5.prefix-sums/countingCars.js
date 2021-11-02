function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let sumSufix = [];
    let sum = 0;
    let totalPairs = 0;
    if (A.length === 1) return 0;
    // if (Math.sum(...A) > A.length ) return null;
    // getting sufix sums
    sumSufix[A.length -1] = A[A.length - 1];
    for (let i = A.length - 2;  i >= 0; i --) {
        sumSufix[i] = A[i] + sumSufix[i + 1];
    }
    // iterate whole array
    A.forEach((val, index) => {
        if (val === 0) {
            totalPairs += sumSufix[index];
        }
    });
    return totalPairs > 1000000000 ? -1 : totalPairs;
    // return totalPairs;
}
module.exports = solution;
