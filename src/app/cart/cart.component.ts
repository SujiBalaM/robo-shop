import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { IProduct } from '../catalog/product.model';

@Component({
  selector: 'robo-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  cart: IProduct[] = [];
  constructor(private cartService: CartService) { }
  ngOnInit() {
    this.cartService.getCartItem().subscribe({
      next: cart => this.cart = cart
    });
  }
  get cartItems() {
    return this.cart;
  }

  getImageUrl(product: IProduct) {
    return './assets/images/robot-parts/' + product.imageName
  }
  get cartTotal() {
    return this.cart.reduce((prev, next) => {
      let discount = next.discount && next.discount > 0 ? 1 - next.discount : 1;
      return prev + next.discount * 100
    }, 0)
  }
  removeFromCart(product: IProduct) {
    this.cartService.removeProduct(product);
  }
}
