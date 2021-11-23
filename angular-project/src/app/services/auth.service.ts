import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login, User, UserNoPW } from '../models/User';
import { JwtHelperService } from '@auth0/angular-jwt';

const httpOptions={
  headers:new HttpHeaders({
    'Content-Type':'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authToken:any;
  user:User;

  constructor(
    private http:HttpClient,
    private jwtHelper:JwtHelperService
  ) { }

  registerUser(user):Observable<any>{ //Observable : rxjs방식으로 서버의 응답을 받아서 전달하는 방식
    const registerUrl='http://localhost:3000/users/register';
    return this.http.post(registerUrl,user,httpOptions) //server로 값을 보냄
  }

  authenticateUser(login:Login):Observable<any>{
    const authenticateUserUrl='http://localhost:3000/users/authenticate';
    return this.http.post<any>(authenticateUserUrl,login,httpOptions)
  }

  storeUserData(token:any,userNoPW:UserNoPW){
    localStorage.setItem('authToken',token);
    localStorage.setItem('UserNoPW',JSON.stringify(userNoPW))

  }

  getProfile(): Observable<any> {
    let authToken: any = localStorage.getItem('authToken');
    // 토큰을 포함한 헤더 옵션 생성
    const httpOptions1 = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json', 
    Authorization: 'Bearer ' + authToken,
    }),
    };
    const profileUrl = 'http://localhost:3000/users/profile';
    return this.http.get<any>(profileUrl, httpOptions1);
    }

  buyproduct(num,point){
    if((point-num)<0){
      return 'false';
    }
    else{
      const buyproducturl='http://localhost:3000/users/buy';
      return this.http.get<any>(buyproducturl,httpOptions);
      return 'true';
    }
    
  }


  logout(){
    localStorage.clear();
  }

  loggedIn():boolean{
    let authToken:any=localStorage.getItem('authToken');
    return !this.jwtHelper.isTokenExpired(authToken);
  }
}
