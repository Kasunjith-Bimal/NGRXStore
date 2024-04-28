import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Post } from 'src/app/model/post.model';
import { AppState } from 'src/app/store/app.state';
import { addPost } from '../state/post.action';

@Component({
  selector: 'app-post-add',
  templateUrl: './post-add.component.html',
  styleUrls: ['./post-add.component.css']
})
export class PostAddComponent implements OnInit {
  postForm! : FormGroup
  ngOnInit(): void {
    this.postForm = new FormGroup({
      title : new FormControl(null,[Validators.required,Validators.minLength(6)]),
      description : new FormControl(null,[Validators.required,Validators.minLength(10)]),
    })
  }

  
  constructor(private store: Store<AppState>) {
  }

  // showDescriptionErrors(){
  //   const descriptionForm = this.postForm.get('description'); 
  //   if(descriptionForm?.touched && !descriptionForm.valid){
  //     if(descriptionForm.hasError('required')){
  //      return 'Description is required';
  //     }

  //     if(descriptionForm.hasError('minlength')){
  //       return 'Description should be of minimum 10 characters length'
  //     }
  //   }
  // }

  onAddPost(){
    
    if(!this.postForm.valid){
      return;
    }
    console.log(this.postForm.value);

    const post : Post ={
      description : this.postForm.value.description,
      title : this.postForm.value.title
    }

    this.store.dispatch(addPost({post}));

  }

}
