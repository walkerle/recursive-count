function recursiveCount(num = 0) {
  // type your code here
  // let count = 0;

  // while(count < 10) {
  //   console.log(count);
  //   ++count;
  // }
  if(num >= 10) {
    // console.log(num);
  } else if(num < 0) {
    console.log('less than 0');
  } else {
    console.log(num);
    recursiveCount(num + 1);
    // recursiveCount(++num);
    // ++num increments then invokes the function/loop
    // num++ invokes the function/loop then increments
  }
}

if (require.main === module) {
  recursiveCount();
  // recursiveCount(10);
}

module.exports = recursiveCount;

// OPTIONAL
// Please add your pseudocode to this file
// And a written explanation of your solution
