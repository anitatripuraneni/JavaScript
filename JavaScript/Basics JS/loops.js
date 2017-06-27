for(var i =0;i<5;i++){
    if(i===3){
       console.log(i);
        break;
    }
   console.log(i);
}
for(var i =0;i<5;i++){
    if(i===3){
     continue;
    }
   console.log(i);
}

var names=['abc','xyz','John','Bob','Mike','Simth','Mary'];
for(var i=0;i<names.length;i++){
    //console.log(names[i]);
}
for(var i=names.length-1;i>=0;i--){
    //console.log(names[i]);
}
var i=0;
while(i<names.length){
    //console.log(names[i]);
    i++;
}