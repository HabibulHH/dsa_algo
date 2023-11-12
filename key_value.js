let student = {
    "jack": 23,
    "doe": 455,
    "jam": 455,
    "fan": 455,
}

let student_two = {
    "john": 200,
    "mac": 45,
    "ben": 90
}

// double scan
for(keys in student_two){
    if(student[keys]){
        student[keys] += student_two[keys]
    }else{
        student[keys] = student_two[keys];
    }
}

let sorted = Object.entries(student);
sorted = sorted.sort((a,b)=> a[1]-b[1]);
let newk = Object.fromEntries(sorted);

console.log(newk);