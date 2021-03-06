function solution(A,K) {
  if(!Array.isArray(A)) return 0;
  let arrayLength = A.length ? A.length : 0;
  if(!arrayLength) return A;
  let iterations = (K % arrayLength);
  console.log(arrayLength, iterations);
  if (iterations === 0) return A;
  let newA = [];
  A.forEach((element, index) => {
    const newPosition = (index + iterations) % arrayLength;
    newA[newPosition] = element;
  });
  return newA;
}


const res = solution([3, 8, 9, 7, 6,1,2,3,4,5,6,7,8,9], 3);
console.log(res);
