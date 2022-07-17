// const startBtn = document.querySelector(".js-start");
// const stopBtn = document.querySelector(".js-stop");
// let timerId = null;

// startBtn.addEventListener("click", () => {
//   timerId = setInterval(() => {
//     console.log(`I love async JS!  ${Math.random()}`);
//   }, 1000);
// });

// stopBtn.addEventListener("click", () => {
//   clearInterval(timerId);
//   console.log(`Interval with id ${timerId} has stopped!`);
// });
// const date = new Date();

// console.log(date);
// // "Fri Jun 18 2021 15:01:35 GMT+0300 (Eastern European Summer Time)"

// console.log(date.toString());
// // "Fri Jun 18 2021 15:01:35 GMT+0300 (Eastern European Summer Time)"

// const textInput = document.querySelector(".text-input");
// const output = document.querySelector(".output");
// let a = "";
// textInput.addEventListener("input", (event) => {
//   a = event.currentTarget.value;
//   // console.log(a);
//   output.textContent = event.currentTarget.value;
// });
// console.log(a);

// console.log(a);
const a = (number) =>
  Math.abs(number)
    .toString()
    .split("")
    .reduce((sum, cur) => +sum + +cur, 0);
console.log(a(25));

const b = (num) =>
  Math.abs(num)
    .toString()
    .split("")
    .reduce((acc, num) => +acc + +num, 0);
console.log(b(56));
