const solution = require('./index');

test('is afunction', () => {
  expect(typeof solution).toEqual('function');
});

test('[1,2,3,4]', ()=> {
  expect(solution([1,2,3,4],2)).toEqual([3,4,1,2]);
})

test('[1,2,3,4,5]', ()=> {
  expect(solution([1,2,3,4,5],6)).toEqual([5,1,2,3,4]);
})
test('[5, -100]', ()=> {
  expect(solution([5, -100],1)).toEqual([-100, 5]);
})
