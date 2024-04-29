import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PostsState } from "./post.state";
export const POST_STATE_NAME =  'posts';
 const getPostsState = createFeatureSelector<PostsState>(POST_STATE_NAME);

 export const getPosts = createSelector(getPostsState,(state)=>{
   return state.posts;
 });


 export const getPostById = (props: any) => {
  return createSelector(getPostsState, (state) =>
      state.posts.find((post) => post.id === props.id)
  );
}

