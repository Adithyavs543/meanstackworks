var arr=[2,4,6,3]
var op=[];
var total=0;
for(let num of arr){
    total+=num;
}
for(let num of arr){
    res=total-num;
    op.push(res)
}
console.log(op);