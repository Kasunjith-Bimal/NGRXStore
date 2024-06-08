import { PostsService } from './../../service/posts.service';
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { addPost, addPostSucess, loadPosts, loadPostsSuccess } from './post.action';
import { map, mergeMap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PostsEffects {

  constructor(private actions$ : Actions,private postsService : PostsService) { }

  loadPosts$ = createEffect(()=>{
    return this.actions$.pipe(
     ofType(loadPosts),
     mergeMap((action)=>{
       return this.postsService.getPosts().pipe(map((data)=>{
        return loadPostsSuccess({posts :data})
       }))
     })
    );

  });

  addPost$ = createEffect(()=>{
    return this.actions$.pipe(
     ofType(addPost),
     mergeMap((action)=>{
       return this.postsService.addPost(action.post).pipe(map((data)=>{
         const post = {...action.post,id :data.name}
         return addPostSucess({post})
       }))
     })
    );

  });
}
