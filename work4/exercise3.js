// 3. Организовать такую цепочку прототипов, в которой свойства и методы оптимально распределены по объектам:

// Есть следующее расширение объектов:
// Человек → Сотрудник → Нынешний сотрудник/ бывший сотрудник

// Есть следующий объект, в котором свойства лежат кучей:
// const john = {
//   name: "John",
//   lastName: "Smith",
//   position: "Senior engineer",
//   startDate: "10.10.1990",
//   endDate: "10.10.2000",
//   baseSalary: "10000",
//   salaryCurrency: "$",
//   location: "Russia",
//   department: "IT",
//   phoneNumber: "+1234567890",
//   eat: function () {},
//   sleep: function () {},
//   callFriend: function () {},
//   writeReport: function () {},
//   organizeMeeting: function () {},
//   retire: function () {},
//   startVacation: function () {},
// };

const Person = function (name, lastName, location, phoneNumber) {
  this.name = name;
  this.lastName = lastName;
  this.location = location;
  this.phoneNumber = phoneNumber;

  this.eat = function () {
    console.log(this.name + " is eating");
  };
  this.sleep = function () {
    console.log(this.name + " is sleeping");
  };
  this.callFriend = function () {
    console.log(this.name + " is calling friends");
  };
};

const Employee = function (
  name,
  lastName,
  location,
  phoneNumber,
  position,
  baseSalary,
  salaryCurrency,
  department
) {
  this.__proto__ = new Person(name, lastName, location, phoneNumber);
  this.position = position;
  this.baseSalary = baseSalary;
  this.salaryCurrency = salaryCurrency;
  this.department = department;

  this.writeReport = function () {
    console.log(this.name + "is writing report");
  };
  this.organizeMeeting = function () {
    console.log(this.name + "is organizing meeting");
  };
};

const CurrentEmployee = function (
  name,
  lastName,
  location,
  phoneNumber,
  position,
  baseSalary,
  salaryCurrency,
  department,
  startDate
) {
  this.__proto__ = new Employee(
    name,
    lastName,
    location,
    phoneNumber,
    position,
    baseSalary,
    salaryCurrency,
    department
  );
  this.startDate = startDate;

  this.startVacation = function () {
    console.log(this.name + "is going on vacation");
  };
  this.retire = function () {
    console.log(this.name + "retired");
  };
};

const FormerEmployee = function (
  name,
  lastName,
  location,
  phoneNumber,
  position,
  baseSalary,
  salaryCurrency,
  department,
  startDate,
  endDate
) {
  this.__proto__ = new Employee(
    name,
    lastName,
    location,
    phoneNumber,
    position,
    baseSalary,
    salaryCurrency,
    department
  );
  this.startDate = startDate;
  this.endDate = endDate;
};

// Employee.prototype = new Person();
// CurrentEmployee.prototype = new Employee();
// FormerEmployee.prototype = new Employee();
