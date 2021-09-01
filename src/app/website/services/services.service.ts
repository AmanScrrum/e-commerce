import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor() { }
  getSevices(): Observable<any>{
    let services =[
      {
        _id : '',
        id : '',
      title : 'Maintenance',
      summary : 'As a managed IT service provider, our expertise is unmatched in Delhi, which we have established by providing high-quality, reliable managed services',
      Thumbnail :'assets/img/services/1.jpg',
      categories : 'Plumber'
    },
      {
        _id : '',
        id : '',
      title : 'Maintenance',
      summary : 'As a managed IT service provider, our expertise is unmatched in Delhi, which we have established by providing high-quality, reliable managed services',
      Thumbnail :'assets/img/services/2.jpg',
      categories : 'Carpainter'
    },
      {
        _id : '',
        id : '',
      title : 'Maintenance',
      summary : 'As a managed IT service provider, our expertise is unmatched in Delhi, which we have established by providing high-quality, reliable managed services',
      Thumbnail :'assets/img/services/3.jpg',
      categories : 'Ac-Repair'
    },
      {
        _id : '',
        id : '',
      title : 'Maintenance',
      summary : 'As a managed IT service provider, our expertise is unmatched in Delhi, which we have established by providing high-quality, reliable managed services',
      Thumbnail :'assets/img/services/1.jpg',
      categories : 'Electrician'
    },
      {
        _id : '',
        id : '',
      title : 'Maintenance',
      summary : 'As a managed IT service provider, our expertise is unmatched in Delhi, which we have established by providing high-quality, reliable managed services',
      Thumbnail :'assets/img/services/2.jpg',
      categories : 'Carpainter'
    },
      {
        _id : '',
        id : '',
      title : 'Maintenance',
      summary : 'As a managed IT service provider, our expertise is unmatched in Delhi, which we have established by providing high-quality, reliable managed services',
      Thumbnail :'assets/img/services/3.jpg',
      categories : 'Carpainter'
    },
      {
        _id : '',
        id : '',
      title : 'Maintenance',
      summary : 'As a managed IT service provider, our expertise is unmatched in Delhi, which we have established by providing high-quality, reliable managed services',
      Thumbnail :'assets/img/services/4.jpg',
      categories : 'Carpainter',
    },
  ]
  return of(services)
  }
}
