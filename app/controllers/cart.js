import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
export default class CartController extends Controller {
  @service('shopping-cart') cart;

  get subtotal() {
    return this.cart.itemList.reduce((acc, item) => {
      return acc + item.price * item.count;
    }, 0);
  }

  get tax() {
    return Number(0.065 * Number(this.subtotal)).toFixed(2);
  }

  get total() {
    return (Number(this.subtotal) + Number(this.tax)).toFixed(2);
  }

  @action
  updateItemCount(item, event) {
    const count = event.target.value;
    if (count >= 0) {
      item.count = count;
    } else {
      item.count = 0;
    }
  }
}
