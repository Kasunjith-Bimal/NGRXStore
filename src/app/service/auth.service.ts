import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './../model/post.model';
import { environment } from 'src/environments/environment';
import { AuthResponseData } from '../model/authResponseData.Model';
import { Observable } from 'rxjs';
import { User } from '../model/user.model';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient){ }

  login(email: string,password:string): Observable<AuthResponseData> {
    return this.http.post<AuthResponseData>(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.FIRBASE_API_KEY}`,{email,password,returnSecureToken:false});
  }

  formatUser(data: AuthResponseData){
    const expirationDate = new Date(new Date().getTime() + (+data.expiresIn) * 1000)
    const user = new User(data.email,data.idToken,data.localId,expirationDate);
    return user;
  }

  getErrorMessageReCreate(messge: string){
    switch (messge) {
      case 'EMAIL_NOT_FOUND':
       return 'Email not found' 
      case 'INVALID_PASSWORD':
       return 'invalid password'
      default : 
      return 'Unknown error occured. please try again'; 
    }
  }
}
