var JohnHeight=110;
var BobHeight =123;
var JohnAge=7;
var BobAge=9;

var JohnScore=JohnHeight+(5*JohnAge);
var BobScore = BobHeight+(5*BobAge);
if(JohnScore>BobScore){
    console.log('John won the game :'+JohnScore);
    
}else if(JohnScore<BobScore){
    console.log('Bob won the game :'+BobScore);
}else if(JohnScore===BobScore){
    console.log('Game is draw');
}