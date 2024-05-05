import { createReducer, on } from "@ngrx/store"
import { initialState } from "./auth.state"
import { autoLogOut, loginSuccess, signupSuccess } from "./auth.action"


const _authReducer = createReducer(initialState,
   on(loginSuccess,(state,action)=>{
    console.log(action);
    return {
        ...state,
        user : action.user
    }
   }),
   on(signupSuccess,(state,action)=>{
    console.log(action);
    return {
        ...state,
        user : action.user
    }
   }),
   on(autoLogOut,(state)=>{
    return {
        ...state,
        user : null
    }
   })
)

export function authReducer(state:any,action:any){
    return _authReducer(state,action)
}
