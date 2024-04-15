import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartComponent } from './cart.component';
import { HttpClientTestingModule } from '@angular/common/http/testing'; 
import {HttpClientModule} from '@angular/common/http';

import { CartService } from '../cart.service';
class CustomStub{
getCartItem(){}
removeFromCart(){}
}
describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartComponent],
      imports:[HttpClientTestingModule],
      providers:[
        {provide:CartService, useClass:CustomStub}
      ]
    });
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
