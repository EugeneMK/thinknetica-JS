// 3. Реализовать функцию для фильтрации массива по длине слов, значения длины указываются включительно, фильтр должен работать так:   
// const fruits = ['lime', 'orange', 'apple', 'banana', '']
// filterByLength(fruits, 0, 5) // ['lime', 'apple', '']

const filterByLength = (array, minLength, maxLength) => array.filter(
  item => item.length >= minLength && item.length <= maxLength
);

let arr1 = ['lime', 'orange', 'apple', 'banana', ''];
filterByLength(arr1, 0, 5);