var twoSum = function(nums, target) {
    let objs={};
    let ans = []
    for(let i =0;i<nums.length;i++){
       let remainig = target-nums[i];
        if(objs[remainig]){
          
         ans.push(i,objs[remainig]-1); 
        }else{
            objs[nums[i]]=i+1;
        }
    } 
    return ans;
};

let result = twoSum([2,7,11,15],9);
console.log(result);