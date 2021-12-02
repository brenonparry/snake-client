const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  
  conn.on('connect', () => {
    console.log(`I've connected! Lets gooooooo`);
  });
  conn.on('connect', () => {
    conn.write('Name: BP');
    conn.write("Say: Lets GOOO!");
    

  });



  //   // MOVE IN A CIRCLE:
  // conn.on('connect', () => {
  
  //   // Timer to move UP//
  //   setTimeout(() => {
  //     let up = 0;
  //     const moveUp = setInterval(() => {
  //     up++
  //     conn.write('Move: up');
  //      if(up === 5) {
  //       clearInterval(moveUp);
  //     }
  //   }, 500);
  //   }, 0);
    
  //   // Timer to move RIGHT
  //   setTimeout(() => {
  //     let right = 0
  //   const moveRight = setInterval(() => {
  //     right++
  //     conn.write('Move: right');
  //     if(right === 5) {
  //       clearInterval(moveRight);
  //     }
  //   }, 500);
  //   }, 2500);

  //   // Timer to move DOWN
  //   setTimeout(() => {
  //     let down = 0
  //   const moveDown = setInterval(() => {
  //     down++
  //     conn.write('Move: down');
  //     if(down === 5) {
  //       clearInterval(moveDown);
  //     }
  //   }, 500);
  //   }, 5000);

  //   // Timer to move LEFT
  //   setTimeout(() => {
  //     let left = 0
  //   const moveLeft = setInterval(() => {
  //     left++
  //     conn.write('Move: left');
  //     if(left === 5) {
  //       clearInterval(moveLeft);
  //     }
  //   }, 500);
  //   }, 7500);

  // });

  
  
  conn.on('data', (data) => {
    console.log(data);
  });
  return conn;
};

module.exports = {
  connect,
};