var employees=[
    [1000,"ram",15000,"hr",1990,2000],
    [1001,"ravi",25000,"hr",1989,2005],
    [1002,"akhil",7000,"developer",2000,2010],
    [1003,"nikhil",35000,"developer",2010,2015],
    [1004,"ajesh",35000,"mrkt",1991,2010],
    [1005,"tom",40000,"ba",1990,2015],
    [1006,"jack",32000,"ba",2001,2010]
]
// print developer details
// var developer=employees.filter(emp=>emp[3]=="developer")
// console.log(developer);

// print names of ba
// var analyst=employees.filter(emp=>emp[3]=="ba").map(emp=>emp[1])
// console.log(analyst);

// print developer name
//  var developers_name=employees.filter(emp=>emp[3]=="developer").map(emp=>emp[1])
// console.log(developers_name);

// print developers names whose exp>6 years
// var dev_names=employees.filter(emp=>(emp[3]=="developer")&((emp[5]-emp[4])>6)).map(emp=>emp[1])
// console.log(dev_names);

// add bonus of 5000 rs for all developers 
// var salary=employees.filter(emp=>emp[3]=="developer").map(emp=>emp[2]+=5000)
// console.log(salary);




// sort employees wrt ex asc,desce
employees.sort((emp1,emp2)=>(emp2[5]-emp2[4])-(emp1[5]-emp1[4]))
console.log(employees);
// employees.sort((emp1,emp2)=>emp2[1]-emp1[1]).filter(emp=>emp[5]-emp[4])
// console.log(employees);


// sort emp wrt salary
// employees.sort((emp1,emp2)=>emp1[2]-emp2[2])
// console.log(employees);

// employees.sort((emp1,emp2)=>emp2[2]-emp1[2])
// console.log(employees);


// sort developers wrt to salary


// employees.sort((emp1,emp2)=>emp1[2]-emp2[2]).filter(emp=>emp[3]=="developer")
// console.log(employees);
// employees.sort((emp1,emp2)=>emp2[2]-emp1[2]).filter(emp=>emp[3]=="developer")
// console.log(employees);







// var employee_names=employees.map((emp)=>emp[1])
// console.log(employee_names);
// print no of employees
// console.log(employees.length);
// print no of develprs
// var developer_count=0;
// for(let employee of employees){
//     if(employee[3]=="developer"){
//         developer_count++;
//     }
// }
// console.log("developers=",developer_count);
// print exp of each employee
// for(let employee of employees){
//     console.log(employee[5]-employee[4]);
    
// }
// var low_sal=employees[0][2];
// for(let employee of employees){
//     if(low_sal>employee[2]){
//         low_sal=employee[2]
//     }
// }
// console.log(low_sal );
// var high_sal=0;
// for(let employee of employees){
//     if(high_sal<employee[2]){
//         high_sal=employee[2]
//     }
// }
// console.log(high_sal);
// total=0;
// for(let employee of employees){
//     if(employee[3]=="developer"){
// total+=employee[2];
// console.log(total);
//     }
// }