const solution = (n) => {
  n = (n).toString(2);
  let array = n.split('');
  let countZeros = 0;
  for(i = 0; i < array.length; i++) {
    if (array[i] === 0) {
      // iniciamos
      countZeros ++;
    }
  }
  return n;
}

console.log('============================================');
console.log(solution(2000));
