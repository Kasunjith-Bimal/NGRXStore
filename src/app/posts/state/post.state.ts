import { Post } from "src/app/model/post.model"

export interface PostsState{
    posts:Post[]
}

export const initialState:PostsState ={
 posts:[]
}
