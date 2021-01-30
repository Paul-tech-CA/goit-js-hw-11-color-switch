const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const refs = {
  startBtn: document.querySelector('[data-action="start"]'),
  stopBtn: document.querySelector('[data-action="stop"]'),
};

let timeoutId = null;
let isPushed = false;

document.body.addEventListener("click", changeBodyColor); 

function changeBodyColor(event){
  if (event.target.nodeName !== "BUTTON") {
    return;
  }
  if (event.target.dataset === refs.startBtn.dataset) {
      if (isPushed){
          return;
      }
      isPushed = true;
    timeoutId = setInterval(() => {
      let number = randomIntegerFromInterval(0, colors.length - 1);
      document.body.style.backgroundColor = colors[number];
    }, 1000);
  }
  if (event.target.dataset === refs.stopBtn.dataset) {
    clearInterval(timeoutId);
    isPushed = false;
    return;
  }
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};



// function changeBodyColor(event){
    // switch (event) {
    //     case event.target.nodeName !== 'BUTTON':
    //         return;
    //     case event.target.dataset === refs.startBtn.dataset:
    //         if (isPushed){
    //             return;
    //         }
    //         isPushed = true;
    //       timeoutId = setInterval(() => {
    //         let number = randomIntegerFromInterval(0, colors.length - 1);
    //         document.body.style.backgroundColor = colors[number];
    //       }, 1000);
    //       break;
    //     case event.target.dataset === refs.stopBtn.dataset:
    //         clearInterval(timeoutId);
    //         isPushed = false;
    //         return; 
    //         default:
    //             break;
    // }
// };