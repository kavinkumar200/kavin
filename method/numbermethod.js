const result = Math.abs(0.2 - 0.3 + 0.1);

console.log(result);
// Expected output: 2.7755575615628914e-17

console.log(result < Number.EPSILON);
// Expected output: true



function multiply(x, y) {
    if (x * y > Number.MAX_VALUE) {
      return 'Process as Infinity';
    }
    return x * y;
  }
  
  console.log(multiply(1.7976931348623157e308, 1));
  // Expected output: 1.7976931348623157e+308
  
  console.log(multiply(1.7976931348623157e308, 2));
  // Expected output: "Process as Infinity"

  function divide(x, y) {
    if (x / y < Number.MIN_VALUE) {
      return 'Process as 0';
    }
    return x / y;
  }
  
  console.log(divide(5e-324, 1));
  // Expected output: 5e-324
  
  console.log(divide(5e-324, 2));
  // Expected output: "Process as 0"




  const a = Number.MIN_SAFE_INTEGER - 1;
  const b = Number.MIN_SAFE_INTEGER - 2;
  
  console.log(Number.MIN_SAFE_INTEGER);
  // Expected output: -9007199254740991
  
  console.log(a);
  // Expected output: -9007199254740992
  
  console.log(a === b);
  // Expected output: true
  



const x = Number.MAX_SAFE_INTEGER + 1;
const y = Number.MAX_SAFE_INTEGER + 2;

console.log(Number.MAX_SAFE_INTEGER);
// Expected output: 9007199254740991

console.log(x);
// Expected output: 9007199254740992

console.log(x === y);
// Expected output: true



function checkNumber(bigNumber) {
    if (bigNumber === Number.POSITIVE_INFINITY) {
      return 'Process number as Infinity';
    }
    return bigNumber;
  }
  
  console.log(checkNumber(Number.MAX_VALUE));
  // Expected output: 1.7976931348623157e+308
  
  console.log(checkNumber(Number.MAX_VALUE * 2));
  // Expected output: "Process number as Infinity"

  
  function checkNumber(smallNumber) {
    if (smallNumber === Number.NEGATIVE_INFINITY) {
      return 'Process number as -Infinity';
    }
    return smallNumber;
  }
  
  console.log(checkNumber(-Number.MAX_VALUE));
  // Expected output: -1.7976931348623157e+308
  
  console.log(checkNumber(-Number.MAX_VALUE * 2));
  // Expected output: "Process number as -Infinity"

  function clean(x) {
    // eslint-disable-next-line use-isnan
    if (x === Number.NaN) {
      // Can never be true
      return null;
    }
    if (isNaN(x)) {
      return 0;
    }
  }
  
  console.log(clean(Number.NaN));
  // Expected output: 0