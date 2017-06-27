function calculateAge(yearOfBirth){
    var age=2016-yearOfBirth;
    return age;
}

var Johnage = calculateAge(1990);
console.log(Johnage);

function yearsUntilRetirment(name,yearOfBirth){
    var age=calculateAge(yearOfBirth);
    var retirmentYears=60-age;
    console.log(name+' retires in '+retirmentYears+' in years.');
    return retirmentYears;
}

var retirmentYears = yearsUntilRetirment('John',1990);
console.log(retirmentYears);