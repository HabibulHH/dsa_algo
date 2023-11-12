function jump(arr, index, dp) {
  if (index == 0) return 0;
  if (dp[index] !== -1) return dp[index];
  let singleJump =
    jump(arr, index - 1, dp) + Math.abs(arr[index] - arr[index - 1]);

  let doubleJump = Number.MAX_SAFE_INTEGER;
  if (index > 1) {
    doubleJump =
      jump(arr, index - 2, dp) + Math.abs(arr[index - 1] - arr[index - 2]);
  }
  return (dp[index] = Math.min(singleJump, doubleJump));
}

// const arr = [12, 90, 23, 3, 34];
// let dp = new Array(arr.length).fill(-1);

// const result = jump(arr, arr.length - 1, dp);

// // console.log(result);
// function jumpWithMemoization() {
//   const arr = [10, 20, 30, 10];
//   if (arr.length <= 1) {
//     return 0; // If the array has 0 or 1 elements, no cost is incurred.
//   }

//   let dp = [];
//   dp[0] = 0;
//   dp[1] = Math.abs(arr[1] - arr[0]);

//   for (let i = 2; i < arr.length; i++) {
//     const firstJumpCost = dp[i - 1] + Math.abs(arr[i] - arr[i - 1]);
//     const secondJumpCost = dp[i - 2] + Math.abs(arr[i] - arr[i - 2]);
//     dp[i] = Math.min(firstJumpCost, secondJumpCost);
//   }

//   return dp[dp.length - 1];
// }


// console.log(result);
function jumpWithSpaceOptimization() {
  const arr = [30, 10, 60, 10,60,50];
  if (arr.length <= 1) {
    return 0; // If the array has 0 or 1 elements, no cost is incurred.
  }

  let prev = 0;
  let secondPrev = 0;
  for (let i = 1; i < arr.length; i++) {
    let curr = 0;
    const firstJumpCost = prev + Math.abs(arr[i] - arr[i - 1]);
    let secondJumpCost = Number.MAX_SAFE_INTEGER;
    if(i>1) secondJumpCost = secondPrev + Math.abs(arr[i] - arr[i - 2]);
     curr = Math.min(firstJumpCost, secondJumpCost);
     secondPrev = prev
     prev=curr;
    
  }

  return prev;
}
console.log(jumpWithSpaceOptimization());
