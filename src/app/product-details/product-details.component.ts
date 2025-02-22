import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../catalog/product.model';

@Component({
  selector: 'robo-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {
  @Input() product!:IProduct;
  @Output() buy = new EventEmitter();

  getImageUrl(product:IProduct) {
    return './assets/images/robot-parts/' + product.imageurl
  }

  buyButtonClicked(product:IProduct){
    this.buy.emit(product);
}
}
