import { createReducer } from "@ngrx/store";
import { initialState } from "./post.state";

const _psotReducer = createReducer(initialState);


export function postReducer(state: any,action:any){
 return _psotReducer(state,action);
}