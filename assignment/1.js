function processArray(arr, callback) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(callback(arr[i]));
    }
    return result;
  }
  
  // Callback function to double a number
  function double(num) {
    return num * 2;
  }
  
  // Example usage
  const numbers = [1, 2, 3, 4, 5];
  const doubledNumbers = processArray(numbers, double);
  
  console.log(doubledNumbers); 
  