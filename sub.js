const input = [12,2,3,4,4];

// Lets fix the starting points
for (let startingIndex = 0; startingIndex < input.length; startingIndex++) {
    /// lets fix the window size 
    for (let index = startingIndex; index < input.length; index++) {
        const subArr=[];
        // run till that window
        for (let j = startingIndex; j < index+1; j++) {
       
           subArr.push(input[j])
        }
            console.log(subArr);

    }
    
}

