

const moveZeros=(arr)=>{
    if (arr.length<=1){
        return arr;
    }
    let leftPointer = 0;
    let rightPointer = 0;
    while(rightPointer<arr.length){
        // if you get any zero at left side , move it to right 
        // left pointer is the garrunty that after this ptr we do not have any non zero element
        // that left zero is the last zero 
        // That last zero element can be swapped with the next non zero element at right prt position 
        if(arr[rightPointer]!==0){
            if(rightPointer!==leftPointer){
                let temp =arr[leftPointer];
                arr[leftPointer] = arr[rightPointer];
                arr[rightPointer] = temp
            }
            leftPointer++;
            rightPointer++
        }else{
            rightPointer++;
        }
       

    console.log(arr);
}
}
moveZeros([0,1,1,1])