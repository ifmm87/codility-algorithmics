const divisible = require('./divisible');

test('solution(A, B, K)', () => {
  expect(divisible(6,11,2)).toEqual(3);
});

test('solution(A, B, K)', () => {
  expect(divisible(0, 0 , 11)).toEqual(1);
});

test('solution(A, B, K)', () => {
  expect(divisible(10, 10 , 3)).toEqual(0);
});

test('solution(A, B, K)', () => {
  expect(divisible(10, 10 , 5)).toEqual(1);
});

test('solution(A, B, K)', () => {
  expect(divisible(0, 10 , 5)).toEqual(3);
});

test('solution(A, B, K)', () => {
  expect(divisible(101, 202 , 101)).toEqual(2);
});

test('solution(A, B, K)', () => {
  expect(divisible(101, 123450000 ,10000 )).toEqual(12345);
});


