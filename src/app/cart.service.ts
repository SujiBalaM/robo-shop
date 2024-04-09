import { Injectable } from '@angular/core';
import { IProduct } from './catalog/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart:IProduct[] = [];

  constructor() { }

  addProduct(product:IProduct) {
    this.cart.push(product);
console.log(`Selected  ${product.name} added to cart`)

  }
}
