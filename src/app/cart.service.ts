import { Injectable } from '@angular/core';
import { IProduct } from './catalog/product.model';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';

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

  getProducts():Observable<IProduct> {
    return this.httpClient.get<IProduct>(this.apiServer+'/products');
  }

  addProduct(product:IProduct) {
    this.cart.push(product);
console.log(`Selected  ${product.name} added to cart`)

  }
}
