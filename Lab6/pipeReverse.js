function pipeReverse(...fns) {
    let errorHandler = null;  // Змінна для збереження обробника помилки
  
    // Функція для підписки на помилки
    function onError(handler) {
      errorHandler = handler;  // Присвоєння обробника помилки
    }
  
    // Композиція функцій справа налево з обробкою помилок
    function composedFunction(x) {
      try {
        return fns.reverse().reduce((value, fn) => {
          if (typeof fn !== 'function') {
            throw new Error('Все аргументи повинні бути функціями');
          }
          return fn(value);
        }, x);
      } catch (e) {
        if (errorHandler) {
          errorHandler(e);  // Викликає обробник помилки, якщо він є
        }
        return undefined;  // Повертає undefined, якщо сталася помилка
      }
    }
  
    // Додаємо метод onError до функції
    composedFunction.onError = onError;
  
    return composedFunction;  // Повертаємо саму скомпоновану функцію
  }
  
  // Приклад використання:
  const inc = x => ++x;
  const twice = x => x * 2;
  const cube = x => x ** 3;
  
  // Комбінування функцій
  const f = pipeReverse(inc, twice, cube);
  const x = f(5);  // Результат: 1728
  
  console.log(x);  // Виведе 1728
  
  // Інший приклад
  const f2 = pipeReverse(inc, inc);
  const x2 = f2(7); // Результат: 9
  
  console.log(x2);  // Виведе 9
  
  // Підписка на помилки
  const f3 = pipeReverse(inc, '7', cube);  // Неправильний аргумент
  f3.onError(e => {
    console.error('Помилка: ' + e.message);  // Виведе: "Помилка: Все аргументи повинні бути функціями"
  });
  console.log(f3(5));  // Виведе: undefined
   
  