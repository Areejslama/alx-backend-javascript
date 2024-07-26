class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  get brand() {
    return this._brand;
  }

  get motor() {
    return this._motor;
  }

  get color() {
    return this._color;
  }

  set brand(value) {
    this._brand = value;
  }

  set motor(value) {
    this._motor = value;
  }

  set color(value) {
    this._color = value;
  }

  static get [Symbol.Allvalues]() {
    return this;
  }

  cloneCar() {
    const mycar = new this.constructor[Symbol.Allvalues]();
    return mycar;
  }
}

export default Car;
