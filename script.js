// Complete the js code

function Car(make, model) {
  // store properties
  this.make = make;
  this.model = model;
}

// add method to Car prototype
Car.prototype.getMakeModel = function() {
  return this.make + ' ' + this.model;
};

function SportsCar(make, model, topSpeed) {
  // call Car constructor to initialize make & model on this
  Car.call(this, make, model);
  // sports car specific property
  this.topSpeed = topSpeed;
}

// inherit from Car.prototype
SportsCar.prototype = Object.create(Car.prototype);
SportsCar.prototype.constructor = SportsCar;

// add sports-car specific method
SportsCar.prototype.getTopSpeed = function() {
  return this.topSpeed;
};

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
