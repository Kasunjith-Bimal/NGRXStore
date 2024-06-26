import { createAction, props } from "@ngrx/store";
import { Post } from "src/app/model/post.model";

export const ADD_POST_ACTION = '[posts page] add post';
export const ADD_POST_SUCCESS ='[posts page] add success';
export const UPDATE_POST_ACTION = '[posts page] edit post';
export const UPDATE_POST_SUCCESS = '[posts page] edit post success';
export const DELETE_POST_ACTION = '[posts page] delete post';
export const DELETE_POST_SUCCESS = '[posts page] delete post success';
export const LOAD_POST = '[posts page] load post';
export const LOAD_POST_SUCCESS = '[posts page] load post success';


export const addPost = createAction(ADD_POST_ACTION,props<{post: Post}>());
export const addPostSucess = createAction(ADD_POST_SUCCESS,props<{post: Post}>());
export const updatePost = createAction(UPDATE_POST_ACTION,props<{post: Post}>());
export const updatePostSucess = createAction(UPDATE_POST_SUCCESS,props<{post: Post}>());
export const deletePost = createAction(DELETE_POST_ACTION,props<{id: string}>());
export const deletePostSucess = createAction(DELETE_POST_SUCCESS,props<{id: string}>());



export const loadPosts = createAction(LOAD_POST);
export const loadPostsSuccess = createAction(LOAD_POST_SUCCESS,props<{posts: Post[]}>());
