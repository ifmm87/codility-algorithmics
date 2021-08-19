const solution = require('./index');
test ('is a function', () => {
  expect(typeof solution).toEqual('function');
})
test('9', () => {
  expect(solution(9)).toEqual(2);
});

test('20', () => {
  expect(solution(20)).toEqual(1);
});

test('32', () => {
  expect(solution(32)).toEqual(0);
});
