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
export class ReaddataService {

  PrepEndpoint(ep){
    // return "http://localhost:3000/"+ep;
    return ep;
  }

  private product: Product[] = [];
  readonly url = this.PrepEndpoint('api/product');

  constructor(private http: HttpClient) {}

  // findall(): Observable<any> {
  //   const findallurl = 'http://localhost:3000/users/findall';
  //   return this.http.get(findallurl, httpOptions);
  // }

  findallUser(): Observable<any> {
    const findallurl = this.PrepEndpoint('users/findalluser');
    return this.http.get(findallurl, httpOptions);
  }




  findallProduct():Observable<any>{
    const url = this.PrepEndpoint('api/findallProduct');
    return this.http.get(url,httpOptions);
  }


  addProduct(name: string, image: string, extra: string,price:string): void {
    const productData = new FormData();
    productData.append('name', name);
    productData.append('image', image, name);
    productData.append('extra', extra);
    productData.append('price',price);

    this.http.post<{ product: Product }>(this.url, productData).subscribe((productData) => {
        const product: Product = {
          _id: productData.product._id,
          productname: name,
          imgsrc: productData.product.imgsrc,
          extra: productData.product.extra,
          price: productData.product.price,
        };
        this.product.push(product);//수정하기
      });
  }
}
