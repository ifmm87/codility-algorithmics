const printTriangleAsteriks = (limit) => {
let  rowAsterisks = '';
  for(let i = 0; i <= limit; i++ ) {
    for(let j = 0; j <= i; j++) {
      rowAsterisks += `* `;
    }
    console.log(`${rowAsterisks} \n`);
    rowAsterisks = '';
  }
}

printTriangleAsteriks(10);
