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

  buyproduct(num, point, name): Observable<any> {
    const buyproducturl = 'http://localhost:3000/users/point';
    return this.http.post(
      buyproducturl,
      { name: name, point: point - num },
      httpOptions
    );
  }

  addProductList(product: Product, name, num): Observable<any> {
    const addproductUrl = 'http://localhost:3000/api/addlist';
    return this.http.post(
      addproductUrl,
      { product: product, name: name, num: num },
      httpOptions
    );
  }

  findProudctList(name): Observable<any> {
    const findProductUrl = 'http://localhost:3000/api/findlist';
    const httpOptions1 = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        body: name,
      }),
    };
    return this.http.get(findProductUrl, httpOptions1);
  }
}
