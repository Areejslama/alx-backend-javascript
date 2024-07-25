export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError('name must be a string');
    } else {
      this._name = name;
    }

    if (typeof length !== 'number') {
      throw new TypeError('length must be a number');
    } else {
      this._length = length;
    }

    if (!Array.isArray(students) || !students.every((student) => typeof student === 'string')) {
      throw new TypeError('students must be an array of strings');
    } else {
      this._students = students;
    }
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  set name(value) {
    if (typeof value === 'string') {
      this._name = value;
    } else {
      throw new TypeError('name must be a string');
    }
  }

  set length(value) {
    if (typeof value === 'number') {
      this._length = value;
    } else {
      throw new TypeError('length must be a number');
    }
  }

  set students(value) {
    if (Array.isArray(value) && value.every((student) => typeof student === 'string')) {
      this._students = value;
    } else {
      throw new TypeError('students must be an array of strings');
    }
  }
}
