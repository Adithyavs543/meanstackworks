var person={p_id:100,p_name:"ajay",age:25}
// chk for vaccinated key is prsnt if yes
if("vaccinated" in person){
person.vaccinated=true
}
else{
    person.vaccinated=false
}
console.log(person);

// chk 
if("vaccinated " in person){
    person.vaccinated+=1
}
else{
    
}