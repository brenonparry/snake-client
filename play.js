const net = require("net");
const { connect } = require("./client");
const { setupInput } = require("./input");

// setup interface to handle user input from stdin:
// const setupInput = function () {
//   const stdin = process.stdin;
//   stdin.setRawMode(true);
//   stdin.setEncoding("utf8");
//   stdin.resume();
//   stdin.on("data", handleUserInput);
//   return stdin;
// };



// const handleUserInput = function () {
//   const stdin = process.stdin;
//   stdin.setRawMode(true);
//   stdin.setEncoding('utf8');
//   stdin.on('data', (key) => {
//     if (key === '\u0003') {
//       process.exit();
//     }
//   });
// };

console.log("Connecting ...");

setupInput(connect());
