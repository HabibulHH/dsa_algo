const nums = [-2,1,-3,4,-1,2,1,-5,4];

let maxiMumSubArray = (array)=>{
    let maxEndingHere =Number.NEGATIVE_INFINITY;
    let maxOverAll = Number.NEGATIVE_INFINITY;
    for (let i = 0; i < array.length; i++) {
       maxEndingHere = Math.max(maxEndingHere +  array[i],array[i]);
       maxOverAll = Math.max(maxOverAll,maxEndingHere);
        
    }
    return maxOverAll;
}

console.log(maxiMumSubArray(nums));