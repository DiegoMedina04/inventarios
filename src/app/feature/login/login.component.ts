import { Component, OnInit } from '@angular/core';
import { AuthSignal } from '../../core/state/auth.signal';

import { FormsModule } from '@angular/forms';
import { AuthService } from '../../core/services/auth/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  imports: [FormsModule],
})
export class LoginComponent implements OnInit{

   email:string ="";
   password:string ="";

  constructor(private authService : AuthService){}
  ngOnInit(): void {
  }
   login(event:any){
    this.authService.login(this.email,this.password);
  }
}
