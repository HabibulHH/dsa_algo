let input = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
let prefixSum = [];

let init = Number.NEGATIVE_INFINITY;
let suffixMax = [];
for (let index = 0; index < input.length; index++) {


    if (input[index] > init) {
        prefixSum[index] = input[index]
    } else {
        prefixSum.push(prefixSum[index - 1])
    }
    init = prefixSum[index];

}
idx = 0;

init = Number.NEGATIVE_INFINITY;

for (let index = input.length - 1; index >= 0; index--) {
    //console.log(input[index]);
    if (input[index] > init) {
        suffixMax[index] = input[index];


    } else {
        suffixMax[index] = suffixMax[index + 1];
    }
    init = suffixMax[index];

}

let result = 0;
for (let index = 0; index < input.length; index++) {


    let waterLevel = Math.min(prefixSum[index], suffixMax[index]) - input[index];


    if (waterLevel > 0) {
        result += waterLevel;
    }

}
console.log(result);
