// 4. Реализовать функцию для сортировки массива чисел по убыванию
// const numbers = [-20, -10, 0, 10, 20, 30]
// sortDesc(numbers) // [30, 20, 10, 0, -10, -20]

const sortDesc = numbers => numbers.sort((a, b) => b - a);

export default sortDesc;