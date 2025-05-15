// const loginform=document.getElementById("login-form");
// const logininput=loginform.querySelector("input");
// const logininbtn=loginform.querySelector("button");

const logininput=document.querySelector("#login-form input");
const logininbtn=document.querySelector("#login-form button");

function onloginbtnclick(){
    const username=logininput.value;
    console.log(username);
    // if(username === ""){
    //     alert("please write your name");
    // }else if(username.length>15){
    //     alert("too long");
    // }
    // //console.log(logininput.value);
    // //console.log("click");
}
logininbtn.addEventListener("click",onloginbtnclick)