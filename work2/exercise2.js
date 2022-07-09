//2. Реализовать функцию для сравнения двух массивов, сравнение должно попарно сравнивать каждый элемент

const compareArrays = (array1, array2) => {
  const biggerArray = array1.length >= array2.length ? array1 : array2;
  const smallerArray = array1.length < array2.length ? array1 : array2;

  return biggerArray.map((element, index) => element === smallerArray[index]);
};

export default compareArrays;