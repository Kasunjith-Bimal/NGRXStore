import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { setLoadingSpinner } from 'src/app/store/shared/shared.action';
import { signupStart } from '../state/auth.action';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  constructor(private store : Store<AppState>){}
  signupForm! : FormGroup;
  ngOnInit(): void {
    this.signupForm = new FormGroup({
      email : new FormControl('',[Validators.required,Validators.email]),
      password : new FormControl('',[Validators.required])
     });
  }
 

  onSignUp(){
   if(!this.signupForm.valid){
    return
   }
   const email = this.signupForm.value.email;
   const password = this.signupForm.value.password;

   this.store.dispatch(setLoadingSpinner({status: true}));
   this.store.dispatch(signupStart({email,password}));
  }
}
