//2. Реализовать функцию для сравнения двух массивов, сравнение должно попарно сравнивать каждый элемент

  const compareArrays = (array1, array2) => {
    if (array1.length !== array2.length) {
      return false;
    }

    return array1.every((item, i) => item === array2[i]);
  };
