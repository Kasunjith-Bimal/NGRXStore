import { createReducer, on } from "@ngrx/store";
import { initialState } from "./post.state";
import { addPost } from "./post.action";

const _psotReducer = createReducer(initialState,
    on(addPost, (state,action) => {
        let post = {...action.post}

        post.id = (state.posts.length +1).toString();
        return {
            ...state.posts,
            posts: [...state.posts,post]
        };
    }),   
);


export function postReducer(state: any,action:any){
 return _psotReducer(state,action);
}