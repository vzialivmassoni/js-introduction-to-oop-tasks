const make = (numer = 0, denom = 1) => ({
  setNumer(n) {
    this.numer = n;
  },
  setDenom(d) {
    this.denom = d;
  },
  getNumer() {
    return this.numer;
  },
  getDenom() {
    return this.denom;
  },
  toString() {
    return `${this.numer}/${this.denom}`;
  },
  add(other) {
    const a = this.numer;
    const b = this.denom;
    const c = other.getNumer();
    const d = other.getDenom();
    return make(a * d + b * c, b * d);
  },
  numer,
  denom,
});

export default make;