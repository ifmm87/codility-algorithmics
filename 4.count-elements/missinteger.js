function solution (A) {
  const obj = {};
  let max = 0;
  for (const n of A) {
    if (n > 0) obj[n] = 1;
    if (n > max) max = n;
  }
  if (Object.keys(obj).length === 0) return 1;
  for(let i = 1; i <= max ; i++) {
    if(!obj[i]) return i;
  }
  return max + 1;
}

console.log(solution([1,2, 3]));
