function solution(n) {
  if (!n) return 0;
  let binaryNumber = n.toString(2);
  let gaps = [];
  let gap = 0;
  binaryNumber = binaryNumber.split('');
  binaryNumber.forEach((value, index) => {
    if (value === '1') {
      gaps.push(gap);
      gap = 0;
    } else {
      gap++;
    }
  });
  return gaps.sort().pop();
}
module.exports = solution;
