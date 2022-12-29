function recursiveCount(num = 0) {
  // type your code here
  if(num >=0){
    return;
  }
  console.log(num)
  recursiveCount(num + 1);
  // second solution
  // if (num === 0) {
  //   return 0;
  // }
}

if (require.main === module) {
  recursiveCount();
}

module.exports = recursiveCount;

// OPTIONAL
// Please add your pseudocode to this file
// And a written explanation of your solution
