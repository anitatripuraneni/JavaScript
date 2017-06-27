var Person=function(name,yearOfBirth,job){
    this.name=name;
    this.yearOfBirth=yearOfBirth;
    this.job=job;
    /*this.calcuateAge=function(){
        console.log(2017-this.yearOfBirth);
    }*/
}
Person.prototype.calcuateAge=function(){
        console.log(2017-this.yearOfBirth);
    }
Person.prototype.lastName='Smith';

var john=new Person('John',1990,'teacher');
var mike=new Person('mike',1994,'driver');
var jane=new Person('jane',1984,'tutor');
john.calcuateAge();
mike.calcuateAge();
jane.calcuateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mike.lastName);


var PersonProto={
    calcuateAge:function(){
        console.log(2017-this.yearOfBirth);
    }
};

var mary=Object.create(PersonProto);
mary.name='Mary';
mary.yearOfBirth=1998;
mary.job='driver';

var paul=Object.create(PersonProto,{
    name:{value:'Paul'},
    yearOfBirth:{value:1987},
    job:{value:'Mechanic'}
});

console.log(mary);
console.log(paul);


// Primitives
var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);

// Objects
var obj1={
    name:'John',
    age:26
};

var obj2=obj1;

obj1.age=30;
console.log(obj1);
console.log(obj2);

//Functions

var age =27;
var obj={
  name: 'Jonas' ,
    city:'NY'
};

function change(a,b){
    a=30;
    b.city='Chicago';
}
change(age,obj);
console.log(age);
console.log(obj);


var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr,fn){
    var arrRes=[];
    for(var i =0;i<arr.length;i++){
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el){
    return (2017-el);
}

function isFullAge(el){
    return el>=18;
}

function maxHeartRate(el){
    if(el >= 18 && el <= 81){
        return Math.round(206.9 - (0.67 * el));
    }else
        return -1;
}


var ages=arrayCalc(years,calculateAge);
console.log(ages);
var fullAges = arrayCalc(ages, isFullAge);
console.log(fullAges);
var rates = arrayCalc(ages, maxHeartRate);
console.log(rates);



function interviewQuestion(job){
    if(job==='designer'){
        return function(name){
            console.log(name + ', can you please explain what UX design is?');
        }
    }else if(job==='teacher'){
        return function(name){
            console.log('What subject do you teach, ' + name + '?');
        }
    }else{
        return function(name){
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

var teacherQuestion=interviewQuestion('teacher');
teacherQuestion('John');
var designerQuestion=interviewQuestion('designer');
designerQuestion('Mary');
var otherQuestion=interviewQuestion('driver');
otherQuestion('James');
interviewQuestion('teacher')('Jane');


function game() {
    var score = Math.random() * 10;
    console.log(score >= 5);
}
game();

(function(){
  var score = Math.random() * 10;
    console.log(score >= 5);  
})();

//console.log(score);
(function(goodLuck){
    var score=Math.random()*10;
    console.log(score>=5-goodLuck);
})(5);

function retirement(retirementAge) {
    var a = ' years left until retirement.';
    return function(yearOfBirth) {
        var age = 2016 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementGermany(1990);
retirementUS(1990);
retirementIceland(1990);

retirement(66)(1990);



var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function(style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good ' + timeOfDay + ', Ladies and gentlemen! I\'m ' +  this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
        } else if (style === 'friendly') {
            console.log('Hey! What\'s up? I\'m ' +  this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
        }
    }
};
john.presentation('formal','morning');

var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
};

john.presentation.call(emily, 'friendly', 'afternoon');
john.presentation.apply(emily, ['friendly', 'afternoon']);

var johnFriendly = john.presentation.bind(john, 'friendly');

johnFriendly('morning');
johnFriendly('night');

var emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('afternoon');