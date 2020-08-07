export default class CartItem {
  id
  title
  description
  price
  inStock
  quantity

  constructor (goods) {
    for(let key in goods) {
      if (key in this) this[key] = goods[key]
    }
    this.quantity = 1
  }
}