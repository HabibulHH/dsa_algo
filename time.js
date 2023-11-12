const pr = new Promise((Resolve,Reject)=>{
   Resolve("I am here on pr create phase");
})

async function hira(){
 let res= await pr;
 console.log(res);
 console.log('hira');
}

hira();
console.log('hira two');