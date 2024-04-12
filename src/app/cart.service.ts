import { Injectable } from '@angular/core';
import { IProduct } from './catalog/product.model';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart:IProduct[] = [];
  private apiServer = "http://localhost:8000";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }
  private cartItem:BehaviorSubject<IProduct[]> = new BehaviorSubject<IProduct[]>([]); 
  getProducts():Observable<IProduct> {
    return this.httpClient.get<IProduct>(this.apiServer+'/products');
  }
  getCart() {
    this.httpClient.get<IProduct[]>(this.apiServer+'/cart').subscribe({
      next:cart => this.cartItem.next(cart)
    })
  }
getCartItem(): Observable<IProduct[]> {
  return this.cartItem.asObservable();
}
  addProduct(product:IProduct) {
    const newCart = [...this.cartItem.getValue(), product];
    this.cartItem.next(newCart);
    this.httpClient.post(this.apiServer+'/cart',product).subscribe(res => {
      console.log(`Selected  ${product.name} added to cart`)

    })

  }

  removeProduct(product:IProduct){
    const newCart = this.cartItem.getValue().filter((i) => i !== product);
    this.cartItem.next(newCart);
    this.httpClient.post(this.apiServer+'/cart',newCart).subscribe(res => {
      console.log(`Selected  ${product.name} removed from cart`)

    })


  }
}
