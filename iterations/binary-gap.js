function solution(N) {
  // write your code in JavaScript (Node.js 8.9.4)
  try {
    if (typeof N !== 'number' || N < 0) throw 'Invalid Number';
    N = N.toString(2);
    let diff = 0;
    let oneIndexs = [],
      differences = [];
    for (let i = 0; i < N.length; i++) {
      if (N[i] === '1') oneIndexs.push(i);
    }
    // console.log('=====================================data=======');
    // console.log(oneIndexs, N);
    if (oneIndexs.length === 1) return 0;
    else if (oneIndexs.length === 2) return oneIndexs[1] - oneIndexs[0] - 1;
    else if (oneIndexs.length > 2) {
      for (let j = 0; j < oneIndexs.length - 1; j++) {
        if (oneIndexs[j + 1] - oneIndexs[j] > diff) {
          diff = oneIndexs[j + 1] - oneIndexs[j];
        }
      }
    }
    return diff - 1;
  } catch (error) {
    return 0;
  }
}

console.log(solution(1610612737));
