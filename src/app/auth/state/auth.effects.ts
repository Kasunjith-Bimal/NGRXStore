import { User } from 'src/app/model/user.model';
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { autoLogOut, autoLogin, loginStart, loginSuccess, signupStart, signupSuccess } from "./auth.action";
import { catchError, exhaustMap, map, mergeMap, of, tap } from "rxjs";
import { AuthService } from "src/app/service/auth.service";
import { AuthResponseData } from "src/app/model/authResponseData.Model";
import { AppState } from "src/app/store/app.state";
import { Store } from "@ngrx/store";
import { setErrorMessage, setLoadingSpinner } from "src/app/store/shared/shared.action";
import { Router } from "@angular/router";


@Injectable()
export class AuthEffects{
    constructor(private actions$ : Actions,private authService : AuthService,private store:Store<AppState>,private router: Router){}

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
                    this.authService.setUserInLocalStorage(user);
                    return loginSuccess({user,redirect: true});
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


    loginRedirect$ = createEffect(()=>{
        return this.actions$.pipe(
         ofType(...[loginSuccess,signupSuccess]),
         tap((action)=>{
          console.log("loginRedirect$",action);
            this.store.dispatch(setErrorMessage({errorMessage: ''}));
            if(action.redirect){
              this.router.navigate(['/'])
            }

         })
        );

    },{dispatch : false});

    // signupRedirect$ = createEffect(()=>{
    //     return this.actions$.pipe(
    //      ofType(signupSuccess),
    //      tap((action)=>{
    //         this.router.navigate(['/'])
    //      })
    //     );

    // },{dispatch : false});


    signup$ = createEffect(()=>{
        return this.actions$.pipe(
            ofType(signupStart),
            exhaustMap((action)=>{
                return this.authService
                .signup(action.email,action.password)
                .pipe(
                    map(
                    (data:AuthResponseData)=>{
                    this.store.dispatch(setErrorMessage({errorMessage: ''}));
                    this.store.dispatch(setLoadingSpinner({status: false}));

                    console.log(data);
                    const user = this.authService.formatUser(data);
                    console.log(user);
                    this.authService.setUserInLocalStorage(user);
                    return signupSuccess({user,redirect: true});
                    }),
                    catchError((errorResponse)=>{
                     console.log(errorResponse);
                     this.store.dispatch(setLoadingSpinner({status: false}));
                     const errorMessage = this.authService.getErrorMessageReCreate(errorResponse.error.error.message);
                     return of(setErrorMessage({errorMessage: errorMessage}));
                    })
                );
            })
        );
    });


    autologin$ = createEffect(
      ()=>{
      return this.actions$.pipe(
        ofType(autoLogin),
        mergeMap((action)=>{
          debugger;
          const user= this.authService.getUserInLocalStorage() as User;
          console.log("$autologin",user);
          return of(loginSuccess({user,redirect: false}))
        })
      );
    });


    logout$ = createEffect(()=>{
      return this.actions$.pipe(
        ofType(autoLogOut),
        map((action)=>{
          this.authService.logout();
          this.router.navigate(['auth']);
        })
      )
    },{dispatch : false});


}
