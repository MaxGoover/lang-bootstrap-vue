export default class CartItem {
  id
  title
  description
  price
  inStock
  #quantity

  constructor (goods) {
    for(let key in goods) {
      if (key in this) this[key] = goods[key]
    }
    this.#quantity = 1
  }

  get quantity () {
    return this.#quantity
  }

  set quantity (value) {
    if (Number.isInteger(value) && value > 0) {
      this.#quantity = Math.floor(value)
    }
  }
}