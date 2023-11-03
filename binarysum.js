let sum=(a,b)=>{
    if(a===1 & b===1) return 0;
    if(a==0 & b==0) return 0;
    if(a===0 & b==1) return 1;
    if(a===1 & b==0) return 1;
}

str="101010";
str_two="1010100";
str_result;
let i = str.length;
let j = str_two.length;
let cf = 0;
let max = Math.max(str.length,str_two.length);
while(max>-1){
   
    let res;
    if(str[i] && str_two[j]){
          res = sum(str[i],temp_two[j]);
          res= sum(res,cf);
    }else if(str[i] && !str_two[j]){
          res = sum(str[i],cf);
    }else if(!str[i] && str_two[j]){
          res = sum(str_two[j],cf);
   } 
  
