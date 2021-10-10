// var arr=[2,3,4,5,6]
// print even no
// var evens=arr.filter(num=>num%2==0)
// console.log(evens);
// 
// var names=["ajay","arun","akash","revin","binoy"]
// var a_names=names.filter(name=>name[0]=='a')
// console.log(a_names);
// var arr=[2,3,4,5,6,7]
// var odd=arr.filter(num=>num%2!==0)
// console.log(odd);

var arr=[2,3,4,5,6,7]
// print squares of even numbers

var evens=arr.filter(num=>num%2==0).map(num=>num**2)
console.log(evens);