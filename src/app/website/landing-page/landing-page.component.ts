
import { Component, OnInit } from '@angular/core';
import { BrandsService } from '../services/brands.service';
// import { map } from 'rxjs/operators';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  categories: any[] = ['Electronic', 'Clothes', 'Accessories'];
  value: any;
  constructor(private brands :BrandsService) { }

  ngOnInit(): void {
    this.getBrand();
  }
getBrand(){
  this.brands.getBrand().subscribe(res=>{
    console.log(res);
    this.value = res;
  })
}
}

