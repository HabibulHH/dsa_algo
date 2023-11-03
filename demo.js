let key = 'constructor';

let obj = {}
if(obj[key]){
    console.log('Yes key exists');
}

// how to solve this?
if(obj.hasOwnProperty(key)){
    console.log('Yes key exists');
}

// new object creator
function student(name){
    this.name=name;
    //return {name:"sup"}
}

let students = new student("hira");
console.log(students);


function sum(){
    return 2+2;
}

function sq(){
    return 4*4;
}

const a = (sum(),sq());
console.log(a);

// validator function
function check(param){
    if(!param){
        throw new Error("No param check please")
    }
}

function printName(param = check()){

    console.log(param);
}
printName(12)

/// Find the output
console.log('A');
(async function(){
    const x = await 5 ;
    console.log('B');
})()
console.log('C');

