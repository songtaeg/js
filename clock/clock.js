const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  //console.log("hello");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  //console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
  //clock.innerText = `${date.getHours()}: ${date.getMinutes()}: ${date.getSeconds()}`;
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}
getClock();
setInterval(getClock,1000);
// setTimeout(sayHello,5000);