// const age = parseInt( prompt("how old?") );
// // parseInt(age);
// //console.log(age, parseInt(age));
// //console.log(age);
// //console.log(isNaN(age));

// if(isNaN(age)){
//     console.log("write a num");
// }

const age = parseInt( prompt("how old?") );

if(isNaN(age) || age<0 ){
    console.log("write a num(음수 불가)");
}else if(age <19){
    console.log("too young");
}else if(age>=19 && age<=50){ // ||:or
    console.log("you can");
}
else{
    console.log("too old");
}