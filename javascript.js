const outer = (a)=>{
    let sum = a || 0 ;
    const inner =(b)=>{
      if(b){
        sum+=b;
        return inner;
      }else{
        return sum;
      }
    }
    return inner;
}

let result = outer(3)(3)();
console.log(result);