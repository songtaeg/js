const h1=document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
    const cuurentColor = h1.style.color;
    let newColor;
    // console.log(h1.style.color);
    // h1.style.color='blue';
    // console.log(h1.style.color);
    if(cuurentColor==="blue"){
        newColor="tomato";
    }else{
        newColor="blue";
    }
    h1.style.color=newColor;
}

h1.addEventListener("click",handleTitleClick);