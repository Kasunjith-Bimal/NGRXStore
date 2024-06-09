import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { getPostById } from '../state/post.selector';
import { Post } from 'src/app/model/post.model';
import { Subscription } from 'rxjs';
import { updatePost } from '../state/post.action';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit,OnDestroy {
  editForm! : FormGroup;
  post! : Post
  editSubscription! : Subscription;
  constructor(private store: Store<AppState>, private route : ActivatedRoute){

  }
  ngOnDestroy(): void {
   if(this.editSubscription){
    this.editSubscription.unsubscribe();
   }
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe((params)=>{
      console.log(params.get('id'));
      const id = params.get('id');
      this.editSubscription =  this.store.select(getPostById({id})).subscribe((data: any)=>{
        debugger;
        this.post = data;
        this.editForm =  new FormGroup({
          title : new FormControl( this.post.title,[Validators.required,Validators.minLength(6)]),
          description : new FormControl(this.post.description,[Validators.required,Validators.minLength(10)]),
        })
      });
    });
  }

  onUpdatePost(){
   if(!this.editForm.valid){
    return
   }

    let title : string = this.editForm.value.title;
    let description : string = this.editForm.value.description;

    let post : Post = {
      id: this.post.id,
      description : description,
      title : title
    }

    this.store.dispatch(updatePost({post}));
  }
}
