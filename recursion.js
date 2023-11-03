let subset = [3,1,2];

const printSub=(idx,ds,arr,n,sum,target)=>{
  if(idx===n) {
    if(sum === target){
        console.log(ds);
    }
    return;
  }
  ds.push(arr[idx])
  sum+=arr[idx]
  printSub(idx+1,ds,arr,n)
  sum= sum - arr[idx]
  ds.pop()
  printSub(idx+1,ds,arr,n)

}

printSub(0,[],subset,subset.length,0,2)

