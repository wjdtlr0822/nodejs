import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/Product';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class BuyService {
  constructor(private http: HttpClient) {}

  PrepEndpoint(ep){
<<<<<<< HEAD
     //return "http://localhost:3000/"+ep;
=======
    // return "http://localhost:3000/"+ep;
>>>>>>> 214f26abd36fdb09e8df6584e694a9833c31de88
    return ep;
  }

  buyproduct(num, point, name): Observable<any> {
    const buyproducturl = this.PrepEndpoint('users/point');
    return this.http.post(
      buyproducturl,
      { name: name, point: point - num },
      httpOptions
    );
  }

  addProductList(product: Product, name, num): Observable<any> {
    const addproductUrl = this.PrepEndpoint('api/addlist');
    return this.http.post(
      addproductUrl,
      { product: product, name: name, num: num },
      httpOptions
    );
  }

  findProudctList(name): Observable<any> {
    const findProductUrl = this.PrepEndpoint('api/findlist');
    const httpOptions1 = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        body: name,
      }),
    };
    return this.http.get(findProductUrl, httpOptions1);
  }
}
