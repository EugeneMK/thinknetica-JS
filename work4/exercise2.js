// 2. С помощью прототипа реализовать структуру "Квадрат" которая будет наследоваться от структуры "Прямоугольник", должна быть возможность задавать размеры обеим фигурам и получать их площадь и периметр

const Rectangle = function (a, b) {
  this.side1 = a;
  this.side2 = b;

  this.getPerimeter = function () {
    return 2 * (this.side1 + this.side2);
  };

  this.getSurface = function () {
    return this.side1 * this.side2;
  };
};

const Square = function (a) {
  this.side1 = a;
  this.side2 = a;
};

Square.prototype = new Rectangle();
