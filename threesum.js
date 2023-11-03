const threeSum= function (arr,target) {
    let ans=[];
  for(let i =0 ; i< arr.length;i++){
    for(let j=i+1 ; j< arr.length;j++){
        for(let k=j+1 ; k< arr.length;k++){
         if(arr[i]+arr[j]+arr[k]===0){
            ans.push([arr[i],arr[j],arr[k]])
         }
        } 
    } 
  }
return ans;
}

let ans =  threeSum([-1,0,1,2,-1,-4],0);
console.log(ans);

