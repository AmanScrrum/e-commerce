
import { Component, OnInit } from '@angular/core';
import { BrandsService } from '../services/brands.service';
import { ServicesService } from '../services/services.service';
// import { map } from 'rxjs/operators';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  categories: any[] = ['Electronic', 'Clothes', 'Accessories'];
  value: any;
  serviceDetail: any;
  constructor(private brands :BrandsService, private service : ServicesService ) { }

  ngOnInit(): void {
    this.getBrand();
    this.getServices();
  }
getBrand(){
  this.brands.getBrand().subscribe(res=>{
    console.log(res);
    this.value = res;
  })
}
getServices(){
  this.service.getSevices().subscribe(res=>{
    console.log(res);
    this.serviceDetail = res;
  })
}
}

