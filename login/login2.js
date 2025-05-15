// const loginform=document.getElementById("login-form");
// const logininput=loginform.querySelector("input");
// const logininbtn=loginform.querySelector("button");

const logininput=document.querySelector("#login-form input");
const loginform =document.querySelector("#login-form");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

//const link=document.querySelector("a");

function onloginSubmit(event){
    event.preventDefault();
    loginform.classList.add(HIDDEN_CLASSNAME);
    const username=logininput.value;
    localStorage.setItem(USERNAME_KEY,username);
    //greeting.innerText="Hello "+ username;
    paintGreetings(username);
}

// function handleLinkclick(event){
//     event.preventDefault();
//     //console.log(event);
//     console.dir(event);
//     //alert("clicked");
// }

//loginform.addEventListener("submit",onloginSubmit);
//link.addEventListener("click",handleLinkclick);
//onloginSubmit(info)
function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername===null){
    loginform.classList.remove(HIDDEN_CLASSNAME);
    loginform.addEventListener("submit",onloginSubmit);
}else{
    paintGreetings(savedUsername)
}