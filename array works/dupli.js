var arr1=[10,11,12,20,21]
var arr2=[20,21,22,23,24]
var count=0;
for(let num1 of arr1){
    for(let num2 of arr2){
        if(num1==num2){
            console.log(num1);
        }
        count++;
    }
}
console.log(count);