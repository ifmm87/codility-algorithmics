function phoneNumber(number) {
  number = number.toString().split('');
  return '(###)-###-###'.replace(/#/g, (match) => number.shift());
}
// const arr = [2, 6];
const roman = 'CMXLIV999';
const matches = roman.match(/CM|CD|XC|XL|IX|IV|\w/g);
const a = ['strong'];
const b = ['ong'];

// console.log(new Map([null, 2, 4]));
console.log(a[0].indexOf(b[0]));


const arr = [9,0,0,0];
const arr2 = [...arr];
arr2.splice(0,1)
// arr.length = 0;
console.log(arr, arr2)
