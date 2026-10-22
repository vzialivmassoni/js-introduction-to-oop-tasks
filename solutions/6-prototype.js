function Money(value, currency = 'usd') {
  this.value = value;
  this.currency = currency;
}

Money.prototype.getValue = function getValue() {
  return this.value;
};

Money.prototype.getCurrency = function getCurrency() {
  return this.currency;
};

Money.prototype.exchangeTo = function exchangeTo(currency) {
  if (this.currency === currency) {
    return new Money(this.value, currency);
  }

  const rate = this.currency === 'usd' ? 0.7 : 1.2;
  return new Money(this.value * rate, currency);
};

Money.prototype.add = function add(money) {
  const convertedMoney = money.exchangeTo(this.currency);
  return new Money(this.value + convertedMoney.getValue(), this.currency);
};

Money.prototype.format = function format() {
  return this.value.toLocaleString(undefined, {
    style: 'currency',
    currency: this.currency,
  });
};

export default Money;
