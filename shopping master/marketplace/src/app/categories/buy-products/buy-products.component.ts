import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from '../products-list/product.model';

@Component({
  selector: 'app-buy-products',
  templateUrl: './buy-products.component.html',
  styleUrls: ['./buy-products.component.scss']
})
export class BuyProductsComponent implements OnInit {

  @Output() resetProduct = new EventEmitter<boolean>();
  @Output() orderConfirmed = new EventEmitter<boolean>();
  quantity : number = 1;
  FixedQuantity : number = 1;
  constructor() { }

  ngOnInit() {
  }

  product = JSON.parse(localStorage.getItem("currentProduct"));
  
  deleteBuyingProduct(){
    localStorage.removeItem('currentProduct');
    this.resetProduct.emit(false);
  }
  confirmBuyingProduct(){

    this.orderConfirmed.emit(true);
  }

  onQuantityChange(qty : string){
    //console.log(qty);
    if(parseInt(qty)<this.FixedQuantity){
     alert("Quantity cannot be zero");
     //console.log("if  "+qty);
      this.quantity=1;
    }
  }
}
