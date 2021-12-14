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


  PrepEndpoint(ep){
    //return "http://localhost:3000/"+ep;
    return ep;
  }


  point_accumulate(user):Observable<any>{
    const pointurl=this.PrepEndpoint('users/point');
    return this.http.post(pointurl,user,httpOptions);
  }

}
