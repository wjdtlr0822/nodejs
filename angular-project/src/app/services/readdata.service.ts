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
export class ReaddataService {

  constructor(
    private http:HttpClient,
  ) { }

  findall():Observable<any>{
    const findallurl='http://localhost:3000/users/findall';
    return this.http.get(findallurl,httpOptions)
  }
}
