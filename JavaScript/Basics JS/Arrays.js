var names=['John','Bob','Mark'];
var years = new Array(1990,1998,1976);
console.log(names);
console.log(names[0]);
names[2]='Phillips';
console.log(names);

var comb=['John','Bob','Mark',1990,1998,1976];
console.log(comb);
comb.push(true);
comb.unshift('Mr.');
comb.pop();
comb.shift();
alert(comb.indexOf('Bob'));
console.log(comb);

if(comb.indexOf('Queen')===-1){
    console.log('Queen is not present in the array.');
}