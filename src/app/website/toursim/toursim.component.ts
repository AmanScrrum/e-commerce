import { Component, OnInit } from '@angular/core';
import { ToursimService } from '../services/toursim.service';

@Component({
  selector: 'app-toursim',
  templateUrl: './toursim.component.html',
  styleUrls: ['./toursim.component.scss']
})
export class ToursimComponent implements OnInit {
  tourDetail: any;
  Info: any[] = ['Entry Formalities', ' Foreigner Registration Offices', ' Tourist Information Center',' Time Difference'];
  constructor(private tour : ToursimService) { }

  ngOnInit(): void {
  this.getTourismPlaces();
  }
  getTourismPlaces(){
    this.tour.getTourismPlaces().subscribe(res=>{
      console.log(res);
      this.tourDetail = res;
    })
  }
}
