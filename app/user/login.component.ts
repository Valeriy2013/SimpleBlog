import { Component } from "@angular/core";
import { AuthService } from "./auth.service";
import { Router } from "@angular/router";

@Component({
    templateUrl:'/app/user/login.component.html',
    styles:[`em { float: rigth; color: #E05C65; padding-left: 10px; }`]
})
export class LoginComponent{
    loginInvalid = false
    constructor(private authService:AuthService, private route:Router){

    }
    login(formValues){
        this.authService.loginUser(formValues.userName, formValues.password).subscribe(resp => {
            if(!resp){
                this.loginInvalid = true
            } else {
                this.route.navigate(['posts'])
            }
        })        
    }

    cancel(){
        this.route.navigate(['posts'])
    }
}