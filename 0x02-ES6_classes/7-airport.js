class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  get name() {
    return this._name;
  }

  get code() {
    return this._code;
  }

  toString() {
    return `[${this._code}]`;
  }

  get [Symbol.toStringTag]() {
        return this._code;
    }

    [Symbol.toPrimitive](hint) {
        if (hint === 'string') {
            return this.toString();
        }
        return null;
    }
}

export default Airport;
