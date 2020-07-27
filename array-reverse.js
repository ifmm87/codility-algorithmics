function solution (array) {
  const n = array.length;
  let aux = null;
  for(let i = 0; i < n/2; i++) {
    aux = array[i];
    array[i] = array[n-i-1];
    array[n - i -1] = aux;
  }
  return array;
}

console.log(solution([5,8,6,9,4]));
