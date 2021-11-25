import { Injectable } from "@angular/core";
import { Router,CanActivate } from "@angular/router";
import { AuthService } from "../services/auth.service";

@Injectable()
export class adminGuard implements CanActivate{
    constructor(
        private authService:AuthService,
        private router:Router
    ){}

    canActivate(){
        if(this.authService.admincheck()){
            return true;
        }
        else{
            this.router.navigate(['profile'])
            return false
        }
    }
}