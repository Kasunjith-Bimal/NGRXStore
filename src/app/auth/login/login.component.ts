import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { loginStart } from '../state/auth.action';
import { setLoadingSpinner } from 'src/app/store/shared/shared.action';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private store: Store<AppState>){}
  ngOnInit(): void {
    this.loginForm = new FormGroup({
     email : new FormControl('',[Validators.required,Validators.email]),
     password : new FormControl('',[Validators.required])
    });
   
  }
  loginForm! : FormGroup;



  onLogin(){
    if(!this.loginForm.valid){
      return
    }

    console.log(this.loginForm.value);
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;
    this.store.dispatch(setLoadingSpinner({status: true}));
    this.store.dispatch(loginStart({email,password}));
  }
}
