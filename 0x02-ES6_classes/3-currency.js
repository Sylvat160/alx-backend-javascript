export class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  get code() {
    return this._code;
  }

  set code(newCode) {
    this._code = newCode;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }

  /**
   * Returns a string representation of the object.
   */

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
