const phoneNumber = require('./index');

test('phoneNumber exists', () => {
  expect(typeof phoneNumber).toEqual('function');
});

test('[1,2,3,4,5,6,7,8,9]', () => {
  expect(phoneNumber([1,2,3,4,5,6,7,8,9])).toEqual('(123) 456-789');
});


test('[0,0,0,0,0,0,0,0,0]', () => {
  expect(phoneNumber([0,0,0,0,0,0,0,0,0])).toEqual('(000) 000-000');
});
