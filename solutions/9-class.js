import _ from 'lodash';

class Cart {
  constructor() {
    this.items = [];
  }

  addItem(item, count) {
    this.items.push({ item, count });
  }

  getItems() {
    return this.items;
  }

  getCost() {
    return _.sumBy(this.items, ({ item, count }) => item.price * count);
  }

  getCount() {
    return _.sumBy(this.items, 'count');
  }
}

export default Cart;
