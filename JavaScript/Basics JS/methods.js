var employee={
    firstName: 'John',
    lastName: 'Smith',
    age: 26,
    yearOfBirth:1987,
    job: 'Teacher',
    isMarried:false,
    family:['Jane','Mark','Bob'],
   // calcuateAge: function(yearOfBirth){
     calcuateAge: function(){
        var age = 2016-this.yearOfBirth;
        console.log(age);
         this.age=age;
        return age;
    }
};
console.log(employee);
console.log(employee.family);
console.log(employee.family[2]);
console.log(employee.calcuateAge());
/*var age = employee.calcuateAge();
employee.age=age;
console.log(employee);*/