class Bank{
    session={}
 accounts = {
    1001: {
        acno: 1001, password: "userone", balance: 5000, transactions:
            [
                { to: 1002, amount: 500 },
                { to: 1003, amount: 600 },
                { to: 1004, amount: 700 }
            ]
    },
    1002: {
        acno: 1002, password: "usertwo", balance: 7000,
        transactions:
            [
                { to: 1001, amount: 500 },
                { to: 1003, amount: 600 },
                { to: 1004, amount: 700 }
            ]
    },
    1003: {
        acno: 1003, password: "userthree", balance: 8000,
        transactions:
            [
                { to: 1001, amount: 500 },
                { to: 1002, amount: 600 },
                { to: 1004, amount: 700 }
            ]
    },
    1004: {
        acno: 1001, password: "userone", balance: 9000,
        transactions:
            [
                { to: 1001, amount: 500 },
                { to: 1003, amount: 600 },
                { to: 1004, amount: 700 }
            ]
    },

}

validateAccountNumber(acno){
    return acno in this.accounts?true:false
}

authenticate(acno,password){
    if(this.validateAccountNumber(acno)){
       let pwd=this.accounts[acno].password
       if(pwd==password){
       this.session["user"]=acno
       
                 //session={"user":1002}
       return 1
       }
       else{
           return -1
       }}
    
    else{
        return 0;
    }
}

balanceEnquiry(){
      let user=this.session["user"]
      return this.accounts[user].balance
}

fundtransfer(to_accno,amount){
    if(this.validateAccountNumber(to_accno)){
        let user=this.session["user"]
        let bal=this.balanceEnquiry()
        
        if(bal>amount){
                //debit
                this.accounts[user].balance-=amount
                this.accounts[to_accno].balance+=amount
                //{to:to_acno,amount:amount}
                this.accounts[user].transactions.push({to:to_accno,amount:amount})
                console.log(this.accounts[user]);
        }
        else{
            console.log("insufficient balance");
     }
    }
    else{
        console.log("invalid acno");
    }

}

paymentHistory(){
    let user=this.session["user"]
    console.log(this.accounts[user].transactions);
}}
var obj=new Bank()
var user=obj.authenticate(1002,"usertwo")
console.log(user==1?"login success":user==-1?"invalid accountnumber":"invalid password");
console.log(obj.balanceEnquiry());
obj.fundtransfer(1001,2000)
obj.paymentHistory()

