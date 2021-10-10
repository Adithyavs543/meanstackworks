var expenses=[12000,13000,14000,15000,11000,25000]
// var total=0;var avg="";

// for(amount of expenses){
// total=total+amount;
// avg=total/6

// }
// console.log(avg);
// for(i=0;i<expenses.length;i++){
//     if(expenses[i]>15000){
//         console.log(i);
//     }
// }
let low_exp=expenses[0];
for(let amount of expenses){
    if(low_exp>amount){
low_exp=amount
    }
}
console.log(low_exp);
var high_exp=expenses[0];
for(let amount of expenses){
    if(high_exp<amount){
        high_exp=amount
    }
}
console.log(high_exp);
let count=0;
for(let amount of expenses){
    if(amount>15000){
        count++;
    }
}
console.log("exp>15000 count",count);