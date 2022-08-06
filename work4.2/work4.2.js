const MotorShip = function (name, enginePower, material, color) {
  this.name = name;
  this.enginePower = enginePower;
  this.material = material;
  this.color = color;
};

const SailingShip = function (name, numberOfMasts, sailArea, color) {
  this.name = name;
  this.numberOfMasts = numberOfMasts;
  this.sailArea = sailArea;
  this.color = color;
};

const Shipyard = function () {
  this.repair = function (ship) {
    if (Object.getPrototypeOf(ship) === Object.getPrototypeOf(this.build())) {
      return `${ship.name} has been repaired.`;
    }
    return `${ship.name} can't be repaired at this shipyard.`;
  };

  this.paint = function (ship, newColor) {
    ship.color = newColor;
    return `${ship.name} is painted ${newColor}.`;
  };

  this.changeShip = function (ship, ...args) {
    if (Object.getPrototypeOf(ship) === Object.getPrototypeOf(this.build())) {
      return this.build(...args);
    }
    return `${ship.name} can't be changed at this shipyard.`;
  };
};

const MotorShipyard = function () {
  this.build = function (...args) {
    return new MotorShip(...args);
  };
};

const SailingShipyard = function () {
  this.build = function (...args) {
    return new SailingShip(...args);
  };
};

MotorShipyard.prototype = new Shipyard();
SailingShipyard.prototype = new Shipyard();
