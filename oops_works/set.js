// class Set{
//     add(){}

    
// }
// var st=new Set()
// st.add(10)
// st.add(10)
// st.add(30)
// console.log(st);


// function add(...args){
//     return args.reduce((num1,num2)=>num1+num2)

// }
// console.log(add(10,20,30,40,50));


function getmax(...args){
    return args.reduce((num1,num2)=>num1>num2?num1:num2)
}
console.log(getmax(10,11,12,13,25,15));