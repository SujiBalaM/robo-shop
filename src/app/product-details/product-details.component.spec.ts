import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailsComponent } from './product-details.component';

describe('ProductDetailsComponent', () => {
  let component: ProductDetailsComponent;
  let fixture: ComponentFixture<ProductDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductDetailsComponent]
    });
    fixture = TestBed.createComponent(ProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create', () => {
    let product = {"id": 18,
    "description": "An inexpensive three-wheeled base. only capable of slow speeds and can only function on smooth surfaces.",
    "name": "Triple Wheeled Base",
    "imageName": "base-triple-wheel.png",
    "category": "Bases",
    "price": 700.5,
    "discount": 0}
    const spy = spyOn(component,'getImageUrl')
    expect(spy).toHaveBeenCalled();
  });
});
