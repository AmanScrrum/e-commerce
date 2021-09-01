import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  getProduct(): Observable <any>{
    let Product = [
      {
       id : 1,
       _id :"brand-name",
       name : 'Apple',
       price : 30,
       Thumbnail :"../../../assets/img/featured/feature-9.jpg" 
 
      },
      {
       id : 1,
       _id :"brand-name",
       name : 'Boat',
       price : 30,
       Thumbnail :"../../../assets/img/featured/feature-11.jpg" 
 
      },
      {
       id : 1,
       _id :"brand-name",
       name : 'Jack & Jones',
       price : 30,
       Thumbnail : "../../../assets/img/featured/feature-12.jpg"
 
      },
      {
       id : 1,
       _id :"brand-name",
       name : 'Jack & Jones',
       price : 30,
       Thumbnail : "../../../assets/img/featured/feature-14.jpg"
 
      },
      {
       id : 1,
       _id :"brand-name",
       name : 'Jack & Jones',
       price : 30,
       Thumbnail : "../../../assets/img/featured/feature-15.jpg"
 
      },
      {
       id : 1,
       _id :"brand-name",
       name : 'Jack & Jones',
       price : 30,
       Thumbnail : "../../../assets/img/featured/feature-16.jpg"
 
      },
      {
       id : 1,
       _id :"brand-name",
       name : 'Jack & Jones',
       price : 30,
       Thumbnail : "../../../assets/img/featured/feature-17.jpg"
 
      },
    ]
    return of(Product)
   }
}
