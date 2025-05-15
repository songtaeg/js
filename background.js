const images =["0.jpeg","1.jpeg","2.jpeg"];

const chosenImg= images[Math.floor(Math.random() * images.length)];

//console.log(chosenImg);
const img2 =document.createElement("img");

img2.src=`img/${chosenImg}`;

//console.log(img2);
document.body.appendChild(img2);