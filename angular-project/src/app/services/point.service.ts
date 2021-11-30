import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const httpOptions={
  headers:new HttpHeaders({
    'Content-Type':'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class PointService {

  constructor(
    private http:HttpClient
  ) { }

  point_accumulate(user):Observable<any>{
    const pointurl='http://localhost:3000/users/point';
    return this.http.post(pointurl,user,httpOptions);
  }

}
