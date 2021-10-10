var accounts=[
    [1000,"ram","savings",50000,true],
    [1001,"ravi","current",40000,true],
    [1002,"nikil","savings",5000,false],
    [1003,"jain","current",34000,false],
    [1004,"ajesh","savings",55000,true]
]
// sort the users wrt balance
// accounts.sort((acc1,acc2)=>acc1[3]-acc2[3])
// console.log(accounts);


// print details of acno=1004
// console.log(accounts[4]);


// is there any person with balance<2000
// var accn=accounts.some(accnt=>accnt[3]<2000)
// console.log(accn);

// print name of users with in_active accnt
var accn=accounts.filter(acnt=>acnt[4]==false)
console.log(accn);

// print details of user with max balance
// var accn=accounts.reduce((acn1,acn2)=>acn1[3]>acn2[3]?acn1:acn2)
// console.log(accn);


// print details of users with acc_type as savings and balance>25000
// var accn=accounts.filter(acnt=>acnt[2]=="savings" ).filter(acnt=>acnt[3]>25000)
// console.log(accn);

