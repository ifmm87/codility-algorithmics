function solution (X, A) {
  let positions = Array(X).fill(1);
  console.log('aaaaa', positions);
  let counter = 0;
  for (let position of A) {
    console.log('====', position)
      if (positions[position - 1]) {
        X--;
      }
    if (X === 0) {
      console.log('==', X, counter);
      return counter;
    }
    positions[position - 1] = 0;
    counter ++;
  };
  return -1;
}
console.log(solution(5, [1,3,1,4,2,3,5,4]));
