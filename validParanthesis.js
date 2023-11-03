/**
 * @param {string} 
 * @return {boolean}
 */
var isValidParanthesis = function(s) {
    let q=[];
    for(let i =0;i< s.length;i++){
       if(s[i]=="(" || s[i]=="{"||s[i]=="[" ){
           q.push(s[i]);
       }else{
           if(q.length ==0) return false;
           let lastOpening = q.pop();
           if(lastOpening == '(' && s[i]==')' || lastOpening == '[' && s[i]==']' || 
           lastOpening == '{' && s[i]=='}'){}
           else{
               return false
           }
       }
    }
    if(q.length ===0){
       return true;
    }
   
};

console.log(isValidParanthesis('(]'));