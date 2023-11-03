let input = ["cae","ate","iom","pok",'aet'];
let ordered =  input.map((item)=>{
    let res =  item.split("").sort().join("")
 //  console.log(res);
   return res; 
}
)
