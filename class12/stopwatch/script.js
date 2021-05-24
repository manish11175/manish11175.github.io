const hours = document.querySelector(".hour");
const min = document.querySelector(".min");
const sec = document.querySelector(".sec");

const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");

let count = 0;

let id;
const startTimer = () => {
   start.setAttribute("disabled",true); 
  id = setInterval(increment, 1000);
  function increment() {
    count += 1;
    let hour = Math.floor(count / 3600);
    let mins = Math.floor((count - hour * 3600) / 60);
    let secs = count - hour * 3600 - mins * 60;
    hours.innerText = hour;
    min.innerText = mins;
    sec.innerText = secs;
  }
};
const stopTimer = () => {
  clearInterval(id);
  start.removeAttribute("disabled");
};
const resetTimer = () => {
  count = 0;
  clearInterval(id);
  hours.innerText = 00;
  min.innerText = 00;
  sec.innerText = 00;
};
start.addEventListener("click", startTimer);
stop.addEventListener("click", stopTimer);
reset.addEventListener("click", resetTimer);
