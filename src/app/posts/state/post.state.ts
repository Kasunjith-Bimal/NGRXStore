import { Post } from "src/app/model/post.model"

export interface PostsState{
    posts:Post[]
}

export const initialState:PostsState ={
 posts:[
    {"id":"1","description":"A","title":"A"},
    {"id":"2","description":"B","title":"B"}
 ]
}