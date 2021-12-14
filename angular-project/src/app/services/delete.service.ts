import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Observable } from 'rxjs';


const httpOptions={
  headers:new HttpHeaders({
    'Content-Type':'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class DeleteService {

  constructor(
    private flashMessage:FlashMessagesService,
    private http:HttpClient
  ) { }


  PrepEndpoint(ep){
    //return "http://localhost:3000/"+ep;
    return ep;
  }

  
  deleteproduct(product):Observable<any>{
    const deleteUrl=this.PrepEndpoint('api/delete');
    return this.http.post(deleteUrl,product,httpOptions) //server로 값을 보냄
  }

  deleteuser(user):Observable<any>{
    const deleteUrl=this.PrepEndpoint('users/delete');
    return this.http.post(deleteUrl,user,httpOptions) //server로 값을 보냄
  }
}
