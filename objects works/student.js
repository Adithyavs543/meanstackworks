var student={
    roll:100,
    name:"nikhil",
    course:"bca",
    total:750

}

// console.log(student.name);

// update total as 800
// student.total=800

// chk for grade key presnt or nt
// console.log("grade" in student);

// add new key value pair (grade,a+)
// student["grade"]="A+"
// console.log(student);

// add 20 marks of bonus
// student["total"]+="20"
// console.log(student);

// chk batch key is presnt or not add batch mearnstack_aug
// if(!("batch" in student)){
    

//     student.batch="mearnstack_aug"
// }
// console.log(student);

for(let key in student){
    console.log(key);//roll,student_name,course
    console.log(student[key]);//student[roll] student[student_name] student[course]

}