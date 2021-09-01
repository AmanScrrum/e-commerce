import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.scss']
})
export class ProductCartComponent implements OnInit {
  cartDetail: any;
 

  constructor(private Product: ProductService) { }

  ngOnInit(): void {
    this. getProduct();
    }
  getProduct(){
    this.Product.getProduct().subscribe(res=>{
this.cartDetail = res;
console.log('get product', this.cartDetail);
    })
    
  }
}
