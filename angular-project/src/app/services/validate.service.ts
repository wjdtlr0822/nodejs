import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidateService {

  constructor() { }
//   *******************************
//   *******************************
//   *******MADE BY 용호***********
//   ******************************* 
//   *******************************
  validateBoard(board){
    if(
      board.title == undefined||
      board.content == undefined
    ){
      return false;
    }
    else{ return true}
  }
  
//   *******************************
//   *******************************
//   *******MADE BY 정식***********
//   ******************************* 
//   *******************************
  validateRegister(user){
    if(
      user.name == undefined||
      user.username == undefined||
      user.email == undefined||
      user.password == undefined
    ){
      return false;
    }
    else{ return true}
  }

  validateEmail(email){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
}
