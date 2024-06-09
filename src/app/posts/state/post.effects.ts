import { PostsService } from './../../service/posts.service';
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { addPost, addPostSucess, deletePost, deletePostSucess, loadPosts, loadPostsSuccess, updatePost, updatePostSucess } from './post.action';
import { map, mergeMap, switchMap } from 'rxjs';


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
         return addPostSucess({post});
       }))
     })
    );

  });


  updatePost$ = createEffect(()=>{
    return this.actions$.pipe(
     ofType(updatePost),
     mergeMap((action)=>{
       return this.postsService.updatePost(action.post).pipe(map((data)=>{
        console.log(data);
        return updatePostSucess({post:action.post});
       }))
     })
    );

  });

  deletePost$ = createEffect(()=>{
    return this.actions$.pipe(
     ofType(deletePost),
     switchMap((action)=>{
       return this.postsService.deletePost(action.id).pipe(map((data)=>{
        return deletePostSucess({id:action.id});
       }))
     })
    );

  });
}
