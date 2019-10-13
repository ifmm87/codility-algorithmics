const solution = (n) => {
  n = (n).toString(2);
  let array = n.split('');
  let countZeros = 0;
  let onesIndex = [];
  for(i = 0; i < array.length; i++) {
    if (array[i] === 1 )
       onesIndex.push(i);
    
  }
  console.log('============================================');
  console.log(`ìndex ${onesIndex}`);
  return n;
}

console.log('============================================');
console.log(solution(2000));
