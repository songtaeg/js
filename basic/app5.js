// function hello(name,age){
//     console.log("hello my name is "+name+"and I'm "+age);
//     //console.log(name);
// }

// hello("nico",10);
// hello("lynn",23);
// hello("dal",31);

// function plus(a,b){
//     console.log(a+b);
// }
// function divide(a,b){
//     console.log(a/b);
// }

// plus(22,14);
// divide(7,2);

// const player={
//     name:"jack",
//     hello: function(Othername){
//         console.log("hi "+Othername);
//     }
// };
// //console.log(player.name);
// player.hello("kevin");
// player.hello("park");

const calc={
    add:function(a,b){
        //console.log(a+b);
        return (a+b);
    },
    min:function(a,b){
        //console.log(a-b);
        return (a-b);
    },
    times:function(a,b){
        //console.log(a*b);
        return (a*b);
    }

};
const addResult = calc.add(43,21);
//console.log(addResult);

const minResult = calc.min(addResult,31);
//console.log(minResult);

const timesResult = calc.times(minResult,10);
//console.log(timesResult);

// calc.add(4,3);
// calc.min(44,12);
// calc.times(34,2);
// console.log(calc.add(4,5));

// const age=34;
// function calckage(age){
//  return age+2;
// }

// const krage =calckage(age);
// console.log(krage);