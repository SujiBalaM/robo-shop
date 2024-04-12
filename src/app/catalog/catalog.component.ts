import { Component } from '@angular/core';
import { IProduct } from './product.model';
import { CartService } from '../cart.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'robo-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent {
  products: any;
  filter: string = '';
  constructor(private cartService: CartService, private route: Router, private activatedRoute: ActivatedRoute) {

  }
  ngOnInit() {
    this.cartService.getProducts().subscribe((product: IProduct) => {
      console.log(product)
      this.products = product;
      this.activatedRoute.queryParams.subscribe(params => {
        this.filter = params['filter'] ?? '';

      })
    })
  }
  getFilteredProducts() {
    return this.filter === '' ? this.products : this.products.filter((element: any) => element.category === this.filter)
  }
  addToCart(product: IProduct) {
    this.cartService.addProduct(product);
    this.route.navigate(['/cart'])
  }
}
