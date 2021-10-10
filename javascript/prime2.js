low=4;
upp=25;

for(i=4;i<=upp;i++){
    let flag=0;
    for(let j=2;j<i;j++){
        if(i%j==0){
            flag++;
            break;
        }
    }
        
        

  if(flag==0){


    console.log(i);
}}