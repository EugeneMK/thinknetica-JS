// Реализуйте функцию cache, которая вернет функцию, возводящую число в степень и возвращающую результат. 
// Функция должна запоминать аргументы, которые она уже получала и возвращать результат сразу, не вычисляя его повторно

// Пример:  
// const calculate = cache();

// calculate(3, 3); // { value: 27, fromCache: false}
// calculate(2, 10); // { value: 1024, fromCache: false}
// calculate(2, 10); // { value: 1024, fromCache: true}

const cache = () => {
  const cacheStorage = [];

  return (base, exp) => {
    const searchEntry = cacheStorage.find(entry => entry.base === base && entry.exp === exp);
    if (searchEntry) {
      return {
        value: searchEntry.value,
        fromCache: true
      };
    }

    const value = base ** exp;
    cacheStorage.push({base, exp, value});

    return {
      value: value,
      fromCahe: false
    };
  };
};
