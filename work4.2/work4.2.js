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
  this.build = function (...args) {
    return new this.ship(...args);
  };

  this.repair = function (ship) {
    if (ship instanceof this.ship) {
      return `${ship.name} has been repaired.`;
    }
    return `${ship.name} can't be repaired at this shipyard.`;
  };

  this.paint = function (ship, newColor) {
    ship.color = newColor;
    return `${ship.name} is painted ${newColor}.`;
  };

  this.changeShip = function (ship, ...args) {
    if (ship instanceof this.ship) {
      return this.build(...args);
    }
    return `${ship.name} can't be changed at this shipyard.`;
  };
};

const MotorShipyard = function () {
  this.ship = MotorShip;
};

const SailingShipyard = function () {
  this.ship = SailingShip;
};

MotorShipyard.prototype = new Shipyard();
SailingShipyard.prototype = new Shipyard();
