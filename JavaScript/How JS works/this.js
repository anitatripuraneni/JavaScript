//console.log(this);
function calculateAge(year){
    console.log(2017-year);
    console.log(this);
}
//calculateAge(1990);
var employee={
    firstName: 'John',
    lastName: 'Smith',
   yearOfBirth: 1990,
    job: 'Teacher',
    isMarried:false,
    calcuateAge:function(){
    console.log(this);
        console.log(2017-this.yearOfBirth);
        function innerFunction(){
            console.log(this);
        }
        innerFunction();
}
};
employee.calcuateAge();

var employee1={
    firstName: 'Mike',
    lastName: 'Smith',
   yearOfBirth: 1980,
    job: 'Teacher',
    isMarried:false
};
employee1.calcuateAge=employee.calcuateAge;
employee1.calcuateAge();