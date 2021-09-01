import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToursimService {

  constructor() { }
  getTourismPlaces(): Observable<any>{
    let Places =[
      {
        _id : '',
        id : '',
      title : 'Mussoorie',
      summary : 'As a managed IT service provider, our expertise is unmatched in Delhi, which we have established by providing high-quality, reliable managed services',
      Thumbnail :'assets/img/toursim/6.jpg',
      categories : 'Plumber'
    },
      {
        _id : '',
        id : '',
      title : 'Nainital',
      summary : 'As a managed IT service provider, our expertise is unmatched in Delhi, which we have established by providing high-quality, reliable managed services',
      Thumbnail :'assets/img/toursim/1.jpg',
      categories : 'Carpainter'
    },
      {
        _id : '',
        id : '',
      title : 'Rudraprayag',
      summary : 'As a managed IT service provider, our expertise is unmatched in Delhi, which we have established by providing high-quality, reliable managed services',
      Thumbnail :'assets/img/toursim/1.jpg',
      categories : 'Ac-Repair'
    },
      {
        _id : '',
        id : '',
      title : 'Chamoli',
      summary : 'As a managed IT service provider, our expertise is unmatched in Delhi, which we have established by providing high-quality, reliable managed services',
      Thumbnail :'assets/img/toursim/4.jpg',
      categories : 'Electrician'
    },
      {
        _id : '',
        id : '',
      title : 'Auli',
      summary : 'As a managed IT service provider, our expertise is unmatched in Delhi, which we have established by providing high-quality, reliable managed services',
      Thumbnail :'assets/img/toursim/1.jpg',
      categories : 'Carpainter'
    },
      {
        _id : '',
        id : '',
      title : 'Pauri',
      summary : 'As a managed IT service provider, our expertise is unmatched in Delhi, which we have established by providing high-quality, reliable managed services',
      Thumbnail :'assets/img/toursim/2.jpg',
      categories : 'Carpainter'
    },
     
  ]
  return of(Places)
  }
}
