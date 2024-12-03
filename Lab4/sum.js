
function sumUsingFor(...args) {
    let result = 0;
    for (let i = 0; i < args.length; i++) {
      result += args[i];
    }
    return result;
  }
  function sumUsingForOf(...args) {
    let result = 0;
    for (let value of args) {
      result += value;
    }
    return result;
  }
  function sumUsingWhile(...args) {
    let result = 0;
    let i = 0;
    while (i < args.length) {
      result += args[i];
      i++;
    }
    return result;
  }
  function sumUsingDoWhile(...args) {
    let result = 0;
    let i = 0;
    do {
      result += args[i];
      i++;
    } while (i < args.length);
    return result;
  }
  function sumUsingReduce(...args) {
    return args.reduce((acc, curr) => acc + curr, 0);
  }
  console.log(sumUsingFor(1, 2, 3));
console.log(sumUsingForOf(10, 9, 3)); 
console.log(sumUsingWhile(1, 2, 37)); 
console.log(sumUsingDoWhile(15, 2, 3)); 
console.log(sumUsingReduce(1, 26, 3));
  