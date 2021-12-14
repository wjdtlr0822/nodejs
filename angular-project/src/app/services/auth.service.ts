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



  PrepEndpoint(ep){
<<<<<<< HEAD
    //return "http://localhost:3000/"+ep;
=======
    // return "http://localhost:3000/"+ep;
>>>>>>> 214f26abd36fdb09e8df6584e694a9833c31de88
    return ep;
  }

//   *******************************
//   *******************************
//   *******MADE BY 정식***********
//   ******************************* 
//   *******************************
  registerUser(user):Observable<any>{ //Observable : rxjs방식으로 서버의 응답을 받아서 전달하는 방식
    const registerUrl=this.PrepEndpoint('users/register');
    return this.http.post(registerUrl,user,httpOptions) //server로 값을 보냄
  }

  authenticateUser(login:Login):Observable<any>{
    const authenticateUserUrl=this.PrepEndpoint('users/authenticate');
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
    const profileUrl = this.PrepEndpoint('users/profile');
    return this.http.get<any>(profileUrl, httpOptions1);
    }

    //////////진행중
  // buyproduct(num,point){
  //   if((point-num)<0){
  //     return 'false';
  //   }
  //   else{
  //     const buyproducturl='http://localhost:3000/users/buy';
  //     return this.http.get<any>(buyproducturl,httpOptions);
  //     return 'true';
  //   }
    
  // }
  
  getPoint(name):Observable<any>{
    const getpointurl=this.PrepEndpoint('users/getpoint');
    return this.http.post(getpointurl,name,httpOptions);
  }

  admin():Observable<any>{
    let adminToken:any=localStorage.getItem('authToken');
    const httpOptions1 = {
      headers: new HttpHeaders({
      'Content-Type': 'application/json', 
      Authorization: 'Bearer ' + adminToken,
      }),
      };
      const adminUrl = this.PrepEndpoint('users/admin');
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
  const boardwriteUrl=this.PrepEndpoint('boards/boardwrite');
  return this.http.post(boardwriteUrl,board,httpOptions)
}

UpdateBoard(board):Observable<any>{
  console.log(board);
  const boardupdateUrl=this.PrepEndpoint('boards/boardupdate');
  return this.http.post(boardupdateUrl,board,httpOptions)
}

DeleteBoard(board):Observable<any>{
  console.log(board);
  const DeleteBoardUrl=this.PrepEndpoint('boards/boardelete');
  return this.http.post(DeleteBoardUrl,board,httpOptions)
}

ChangePW(login:Login):Observable<any>{
  const ChangePWUrl=this.PrepEndpoint('users/ChangePW');
  return this.http.post<any>(ChangePWUrl,login,httpOptions)
}

getList(): Observable<any> {
  const listUrl = this.PrepEndpoint('boards/Boardlist');
  return this.http.get(listUrl);
  }

  registertoken(token):Observable<any>{
    const registertokenUrl = this.PrepEndpoint('users/registertoken');
    return this.http.post(registertokenUrl,token,httpOptions);
  }
  
  authenticatetoken(request): Observable<any> {
    const authenticatetokenUrl = this.PrepEndpoint('users/authenticatetoken');
    return this.http.post(authenticatetokenUrl, request, httpOptions);
    }
}
