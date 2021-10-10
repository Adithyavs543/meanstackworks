class student{
    // setstudent(roll,course,stud_name){
        constructor(roll,course,stud_name){
        this.roll=roll,
        this.course=course,
        this.stud_name=stud_name

        //this.roll,this.course,this.stud_name(instance variable)
        //name,age,gender(local variable)
        //this keywrd used in class
        //ref name used outsde class

        //dutyof setstudent() /constuctor initializing instance variables
    }
    printstudent(){
        console.log(this.roll,this.course,this.stud_name);
    }
}


var obj1=new student(1,"BCA","Maalu");
// obj1.setstudent(1,"BCA","Adithya")
// console.log(obj1.roll);
// console.log(obj1.course);
// console.log(obj1.stud_name);
obj1.printstudent()

var obj2=new student(2,"BCOM","Anju")
// obj2.setstudent(2,"BCOM","Maalu")
// console.log(obj2.roll);
// console.log(obj2.course);
// console.log(obj2.stud_name);
obj2.printstudent()