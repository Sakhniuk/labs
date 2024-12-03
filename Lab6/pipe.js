
const pipe = (...fns) => {
    if (fns.some(fn => typeof fn !== 'function')) {
      throw new Error('Все аргументи повинні бути функціями');
    }
  
    return (x) => {
      return fns.reduce((value, fn) => fn(value), x);
    };
  };
  const inc = x => ++x;
  const twice = x => x * 2;
  const cube = x => x ** 3;
  
  const f = pipe(inc, twice, cube);
  const x = f(5);  
  
  console.log(x);  
  const f2 = pipe(inc, inc);
  const x2 = f2(7); 
  
  console.log(x2);  
  try {
    const f3 = pipe(inc, 7, cube);  
  } catch (error) {
    console.error(error.message); 
  }
  