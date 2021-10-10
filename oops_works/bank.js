class bank{
    createAccount(p_name,acno,ac_type,min_bal){
         this.p_name=p_name,
         this.acno=acno,
         this.ac_type=ac_type,
         this.balance=min_bal
    }
    deposit(amount){
          this.balance+=amount
          console.log(`your account ${this.acno} has been credited with amount ${amount} aval balance ${this.balance}`);
    }
    withdrawal(amount){
          if(this.balance>amount){
               this.balance-=amount;
               console.log(`your account ${this.acno} has been debited with amount ${amount} avl bal ${this.balance}`);
          }
          else{
              console.log("transaction failed insufficient");
          }
    }
}
var obj1=new bank()
obj1.createAccount("ram",1000,"savings",3000)
obj1.deposit(4000)
obj1.withdrawal(3000)