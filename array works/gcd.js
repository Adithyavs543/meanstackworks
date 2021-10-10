var num1=24;
var num2=30;gcd=1,i=1
for(i=1;i<=num1&&i<=num2;i++){
    if(num1%i==0&&num2%i==0){
        gcd=i;
    }
        else {
            break;
        }
   
    console.log(`${gcd}`);
}