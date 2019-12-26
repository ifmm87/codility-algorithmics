/** count odd number of ocurrences
  * @param { array } array array  with N integer elements
  * @return {int} the element that was left unpaired
  */
function solution(array = []) {
  let resultado = 0;
 if (!array.length) return 0;
  for(let i = 0 ; i < array.length; i++) {
    // retrieving number of times
    const number = array.filter((number) => array[i] === number);
    // verifying if it is unpair
    if (number.length % 2) {
      resultado = number[0];
      break;
    }
  }
  return resultado;
}
const a = solution([5, 4, 8, 9, 5, 9, 4, 8, 8, 8, 8, 4]);
console.log(a);
