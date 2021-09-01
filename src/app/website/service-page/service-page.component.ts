import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services/services.service';
@Component({
  selector: 'app-service-page',
  templateUrl: './service-page.component.html',
  styleUrls: ['./service-page.component.scss']
})
export class ServicePageComponent implements OnInit {
  serviceDetail: any;

  constructor(private service : ServicesService) { }

  ngOnInit(): void {
    this.getServices();
  }
getServices(){
  this.service.getSevices().subscribe(res=>{
    console.log(res);
    this.serviceDetail = res;
  })
}
}
