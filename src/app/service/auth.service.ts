import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AuthResponseData } from '../model/authResponseData.Model';
import { Observable } from 'rxjs';
import { User } from '../model/user.model';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.state';
import { autoLogOut } from '../auth/state/auth.action';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  timeoutInterval : any;
  setUserInLocalStorage(user: User) {
    localStorage.setItem("UserData",JSON.stringify(user));

    this.runTimeOutInterval(user);
  }

  logout(){
    localStorage.removeItem('UserData');
    if(this.timeoutInterval){
      this.timeoutInterval = null;
    }
  }

  runTimeOutInterval(user: User){
    const todaysDate = new Date().getTime();
    const expirationDate = user.expireDate.getTime();

    const timeInterval = expirationDate - todaysDate;


    this.timeoutInterval = setTimeout(() => {
       //log out function get refresh token
     this.store.dispatch(autoLogOut())

    }, timeInterval);
  }

  getUserInLocalStorage(){
    debugger;
    const userDataString =  localStorage.getItem("UserData");
    console.log(userDataString);
    if(userDataString){
      const userData = JSON.parse(userDataString);
      const expirationDate = new Date(userData.expirationDate);
      const user = new User(userData.email,userData.token,userData.localId,expirationDate);

      this.runTimeOutInterval(user);
      return user;
    }
    return null;
  }

  constructor(private http: HttpClient,private store : Store<AppState>){ }

  login(email: string,password:string): Observable<AuthResponseData> {
    return this.http.post<AuthResponseData>(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.FIRBASE_API_KEY}`,{email,password,returnSecureToken:false});
  }


  signup(email: string,password:string): Observable<AuthResponseData> {
    return this.http.post<AuthResponseData>(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.FIRBASE_API_KEY}`,{email,password,returnSecureToken:false});
  }

  formatUser(data: AuthResponseData){
    console.log("formateUser1",data);
    const helper = new JwtHelperService();
    const decodedToken =  helper.decodeToken(data.idToken);
    console.log("decodeToken",decodedToken);
    const expirationDate = new Date(new Date().getTime() + (decodedToken.exp))
    console.log("formateUser2",expirationDate);
    const user = new User(data.email,data.idToken,data.localId,expirationDate);
    return user;
  }

  getErrorMessageReCreate(messge: string){
    switch (messge) {
      case 'EMAIL_NOT_FOUND':
       return 'Email not found'
      case 'INVALID_PASSWORD':
       return 'invalid password'
      case 'EMAIL_EXISTS':
       return 'Email already exists';
      default :
      return 'Unknown error occured. please try again';
    }
  }
}
