/** count odd number of ocurrences
  * @param { array } array array  with N integer elements
  * @return {int} the element that was left unpaired
  */
function solution(array = []) {
  array.forEach((item) => {
    const number = array.filter((number) => item === number);
    if (number.length % 2) {
      console.log('============================================');
      console.log(`${number} haves ${number.length} ocurrences, besides haves an element unpaired`);
      return item;
    }
  });
  return 0;
}
const a = solution([5, 4, 8, 9, 5, 9, 4, 8, 8]);
console.log('==================respuesta==========================');
console.log(a);
