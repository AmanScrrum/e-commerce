import { Component, OnInit } from '@angular/core';
import { BrandsService } from '../services/brands.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
 
  Product_name: any;

  constructor( private brands : BrandsService) { }

  ngOnInit(): void {
    this.getBrand();
  }
  getBrand(){
    this.brands.getBrand().subscribe(res=>{
      this.Product_name= res;
    })
  }
}
