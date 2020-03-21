function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    const obj = {};
    let max = 0;
    for (const n of A) {
        if (obj[n]) obj[n] += 1
        else obj[n] = 1;
        if (n > max) max = n;
    }
    for (let i = 1; i <= max; i++) {
        if(!obj[i]) {
            return 0;
        } else if (obj[i] > 1)  return 0; 
    }
    return 1;
}
