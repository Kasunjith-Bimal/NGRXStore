import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { loginStart, loginSuccess } from "./auth.action";
import { catchError, exhaustMap, map, of } from "rxjs";
import { AuthService } from "src/app/service/auth.service";
import { AuthResponseData } from "src/app/model/authResponseData.Model";
import { AppState } from "src/app/store/app.state";
import { Store } from "@ngrx/store";
import { setErrorMessage, setLoadingSpinner } from "src/app/store/shared/shared.action";


@Injectable()
export class AuthEffects{
    constructor(private actions$ : Actions,private authService : AuthService,private store:Store<AppState>){}

    login$ = createEffect(()=>{
        return this.actions$.pipe(
            ofType(loginStart),
            exhaustMap((action)=>{
                return this.authService
                .login(action.email,action.password)
                .pipe(
                    map(
                    (data:AuthResponseData)=>{
                    this.store.dispatch(setErrorMessage({errorMessage: ''}));
                    this.store.dispatch(setLoadingSpinner({status: false}));
                    
                    console.log(data);
                    const user = this.authService.formatUser(data);
                    console.log(user);
                    return loginSuccess({user});
                    }),
                    catchError((errorResponse)=>{
                     this.store.dispatch(setLoadingSpinner({status: false}));
                     const errorMessage = this.authService.getErrorMessageReCreate(errorResponse.error.error.message);
                     return of(setErrorMessage({errorMessage: errorMessage}));
                    })
                );
            })
        );
    });
}