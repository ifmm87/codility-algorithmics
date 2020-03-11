/**
 * frog jump
 * X is the initial position
 * Y is the target postion
 * D is the frog's jump distance
 *
 * X + D
 *
 * */

// function solution (X, Y, D) {
//   if (X === Y) return 0;
//   if (X > Y) return 0;
//   let distanceTraveled = X;
//   let jumps = 0;
//   while (distanceTraveled < Y) {
//     distanceTraveled += D;
//     jumps ++;
//   }
//   return  jumps;
// }

function solution(X, Y, D) {
  if (X === Y) return 0;
  if (X > Y) return 0;
  return Math.ceil((Y - X) / D);
}
console.log(solution(10, 85, 30));
