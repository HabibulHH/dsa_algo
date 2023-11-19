/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let k_v={}
    for(let i = 0;i<nums.length;i++){
        if(!k_v[nums[i]]){
            k_v[nums[i]]=1;
        }else{
            k_v[nums[i]]+=1; 
        }
    }

    // sort object problem
    let tops = Object.entries(k_v);
    tops= tops.sort((a,b)=>b[1]-a[1])
    console.log(tops);
    let ans = [];
    for(let i = 0 ; i<k;i++){
        //console.log(tops[i][0]);
         ans.push(tops[i][0])
    }
   
    return ans;
};
console.log(topKFrequent([1,1,1,2,2,3],2));