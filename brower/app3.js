const h1=document.querySelector("div.hello:first-child h1");

// console.dir(title);
// title.innerText="hello"
// title.style.color='blue';

function handleTitleClick(){
    //console.log("title was clicked");
    h1.style.color='blue';
}
function handleMouseEnter(){
    //console.log("mouse here");
    h1.innerText="Mouse is here!";
}
function handleMouseLeave(){
    h1.innerText="Mouse is gone!"
}

function handleWindowResize(){
   document.body.style.backgroundColor="red";
}

function handleWindowCopy(){
    alert("copier");
}

 function handleWindowOffLine(){
    alert("no wifi");
 }

 function handleWindowOnLine(){
    alert("all good");
 }
 
h1.addEventListener("click",handleTitleClick);
//title.onclick=handleTitleclick;
h1.addEventListener("mouseenter",handleMouseEnter);
h1.addEventListener("mouseleave",handleMouseLeave);

window.addEventListener("resize",handleWindowResize);
window.addEventListener("copy",handleWindowCopy);
window.addEventListener("offline",handleWindowOffLine);
window.addEventListener("online",handleWindowOnLine );