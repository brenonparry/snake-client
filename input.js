

let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};


const handleUserInput = function (key) {
    if (key === '\u0003') {
      process.exit();
    };

    if(key === 'w') {
      connection.write("Move: up");
    };
    if(key === 's') {
      connection.write("Move: down");
    };
    if(key === 'a') {
      connection.write("Move: left");
    };
    if(key === 'd') {
      connection.write("Move: right");
    };
};


module.exports = {
  setupInput,
};

// if ('u0057') {
//   console.log("checking key W: ", 'u0057')
// };
// w = u0057
// a = u0041
// s = u0053
// d = u0044
