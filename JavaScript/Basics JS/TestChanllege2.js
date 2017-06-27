var years=[1984,1985,1999,2006,2001,2009];
function fullage(years){
var persons=[];
for(var i =0;i<years.length;i++){
   persons.push(calculateAge(years[i]));
    }
function calculateAge(yearOfBirth){
    return 2017-yearOfBirth;
}

for(var i=0;i<persons.length;i++){
    if(persons[i]>18){
        console.log('person age is greater than 18 years: '+ persons[i]);
    }else if(persons[i]<18){
        console.log('person age is less than 18 years: '+ persons[i]);
    }else if(persons[i]===18){
        console.log('person age is equal to 18 years: '+ persons[i]);
    }
}
}

var fullAge = fullage(years);
//console.log(fullage);
