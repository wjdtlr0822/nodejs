import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
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
  name:string;
  constructor(
    private http:HttpClient,
    private jwtHelper:JwtHelperService
  ) { }





//   *******************************
//   *******************************
//   *******MADE BY 정식***********
//   ******************************* 
//   *******************************
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
    const httpOptions1 = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json', 
    Authorization: 'Bearer ' + authToken,
    }),
    };
    const profileUrl = 'http://localhost:3000/users/profile';
    return this.http.get<any>(profileUrl, httpOptions1);
    }

    //////////진행중
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
  
  admin():Observable<any>{
    let adminToken:any=localStorage.getItem('authToken');
    const httpOptions1 = {
      headers: new HttpHeaders({
      'Content-Type': 'application/json', 
      Authorization: 'Bearer ' + adminToken,
      }),
      };
      const adminUrl = 'http://localhost:3000/users/admin';
      return this.http.get<any>(adminUrl, httpOptions1);
  }

  admincheck():boolean{
    this.admin().subscribe((data)=>{
      this.name=data.admin.name;
    })
    if(this.name=="admin"){return true;}
    else{return false;}
  }

  logout(){
    localStorage.clear();
  }

  loggedIn():boolean{
    let authToken:any=localStorage.getItem('authToken');
    return !this.jwtHelper.isTokenExpired(authToken);
  }



//   *******************************
//   *******************************
//   *******MADE BY 용호***********
//   ******************************* 
//   *******************************

registerBoard(board):Observable<any>{
  const boardwriteUrl='http://localhost:3000/boards/boardwrite';
  return this.http.post(boardwriteUrl,board,httpOptions)
}

UpdateBoard(board):Observable<any>{
  console.log(board);
  const boardupdateUrl='http://localhost:3000/boards/boardupdate';
  return this.http.post(boardupdateUrl,board,httpOptions)
}

DeleteBoard(board):Observable<any>{
  console.log(board);
  const DeleteBoardUrl='http://localhost:3000/boards/boardelete';
  return this.http.post(DeleteBoardUrl,board,httpOptions)
}

ChangePW(login:Login):Observable<any>{
  const ChangePWUrl='http://localhost:3000/users/ChangePW';
  return this.http.post<any>(ChangePWUrl,login,httpOptions)
}

getList(): Observable<any> {
  const listUrl = 'http://localhost:3000/boards/Boardlist';
  return this.http.get(listUrl);
  }
}
