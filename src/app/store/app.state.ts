import { AUTH_STATE_NAME } from "../auth/state/auth.selector";
import { counterReducer } from "../counter/state/counter.reducer";
import { CounterState } from "../counter/state/counter.state";
import { postReducer } from "../posts/state/post.reducer";
import { PostsState } from "../posts/state/post.state";
import { sharedReducer } from "./shared/shared.reducer";
import { SHARED_STATE_NAME } from "./shared/shared.selector";
import { SharedState } from "./shared/shared.state";
import { AuthState } from './../auth/state/auth.state';
import { authReducer } from "../auth/state/auth.reducer";

// export interface AppState{
//     counter : CounterState,
//     posts: PostsState
// }

// export const appReducer = {
//    counter : counterReducer,
//    posts : postReducer
// }

export interface AppState{
   [SHARED_STATE_NAME] : SharedState;
   [AUTH_STATE_NAME] : AuthState;
}

export const appReducer = {
    [SHARED_STATE_NAME] : sharedReducer,
    [AUTH_STATE_NAME] : authReducer
}