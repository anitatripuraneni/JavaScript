var employee={
    firstName: 'John',
    lastName: 'Smith',
    age: 26,
    job: 'Teacher',
    isMarried:false
};
console.log(employee);
console.log(employee.firstName);
console.log(employee['lastName']);

employee.lastName='Milton';
employee.job='Programmer';
console.log(employee);


var jane= new Object();
jane.name='Jane';
jane.lastName='Smith';
jane['dob']=1967;
jane['isMarried']=true;
console.log(jane);
