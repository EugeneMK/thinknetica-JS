//1. Реализовать функцию, которая принимает текст, и возвращает массив объектов со структурой { word: 'smth', length: 4, isCapitalized: false}

const analizeWord = (currentWord) => {
  return {
    word: currentWord,
    length: currentWord.length,
    isCapitalized: currentWord === currentWord.toUpperCase()
  };
};

const removePunctuation = (word) => word.replace(/[^a-zа-я]/gi, "");

const analizeText = (text) => text.split(' ').map(removePunctuation).map(analizeWord);

export default analizeText;