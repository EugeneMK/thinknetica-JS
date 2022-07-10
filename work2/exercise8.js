// 8. Создать объект human со следующими возможностями:
// 1. При записи значения в свойство fullName имя и фамилия должны записываться в отдельные свойства firstName и lastName
// 2. При чтении значения fullName оно должно получаться из объединения firstName и lastName
// 3. При задании значения свойства dateOfBirth должно так же устанавливаться свойство age в зависимости от разницы года рождения и текущего года

const human = Object.create({}, {
  firstName: {
      writable: true
  },

  lastName: {
      writable: true
  },

  fullName: {
    set: function (name) {
      [this.firstName, this.lastName] = name.split(' ');
    },

    get: function () {
      return (`${this.firstName} ${this.lastName}`);
    }
  },
  
  dateOfBirth: {
    writable: true
  },

  age: {
    get: function () {
      return new Date().getYear() - new Date(this.dateOfBirth).getYear();
    }
  }
});

human.firstName = 'Ivan';
human.lastName = 'Ivanov';
human.dateOfBirth = '2000.02.28';
