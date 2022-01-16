createPhoneNumber = (n) => '(###) ###-####'.replace(/#/g, (str, p1, p2, offset, s) => {
  // console.log(str, p1, p2);
  return n.shift() });

// console.log(createPhoneNumber([5,6,4,4,5,6,7,8,8,0]))
create =  ( numbers ) => numbers.reduce((p,c) =>  p.replace('x', c), "xxx xxx**-xxxx");

console.log(create([5,6,4,4,5,6,7,8,8,0]))

