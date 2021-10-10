arr1=[10,20,21,22]
arr2=[11,12,20,21]
for(let num of arr1){
    for(let nums of arr2){
        if(num==nums){
            console.log(num);
        }
    }
}