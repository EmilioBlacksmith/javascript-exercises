const fibonacci = function(n) {
    if (n < 0) {
        return "OOPS";
      } else if (n === 0) {
        return 0;
      } else if (n === 1) {
        return 1;
      } else {
        let a = 0;
        let b = 1;
        let temp;
        for (let i = 2; i <= n; i++) {
          temp = a + b;
          a = b;
          b = temp;
        }
        return b;
      }
    
};

// Do not edit below this line
module.exports = fibonacci;
