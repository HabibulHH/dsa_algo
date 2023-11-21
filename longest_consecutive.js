function longestConsecutiveSub(arr) {

    let k_v = {};
    for (let i = 0; i < arr.length; i++) {
        k_v[arr[i]] = true;
    }
    let maximumLength = 0;
    for (let i = 0; i < arr.length; i++) {
        if (!k_v[arr[i]-1]) {
             let lowestOfSub = arr[i];
             let currentSteak =1;
             while(k_v[lowestOfSub+1]){
                currentSteak+=1;
                lowestOfSub+=1;
             }
            maximumLength = Math.max(maximumLength, currentSteak)
        }
    }
    return maximumLength;
}

const maximum=longestConsecutiveSub([100,4,200,1,3,2]);
console.log(maximum,"maximum length");