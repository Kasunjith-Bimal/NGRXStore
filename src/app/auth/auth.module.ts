import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './state/auth.effects';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes:Routes =[
   { 
     path: '', 
     children:[
      {path:'',redirectTo:'login',pathMatch:'full'},
      {path:'login',component:LoginComponent},
      {path:'signup',component:SignUpComponent}
     ]
   }
]


@NgModule({
  declarations: [
    LoginComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    EffectsModule.forFeature([AuthEffects]),
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AuthModule { }
