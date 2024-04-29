import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { PostListComponent } from './post-list/post-list.component';
import { PostAddComponent } from './post-add/post-add.component';
import { PostEditComponent } from './post-edit/post-edit.component';
import { StoreModule } from '@ngrx/store';
import { postReducer } from './state/post.reducer';
import { POST_STATE_NAME } from './state/post.selector';

const routes:Routes =[
  { 
    path: '',
    component: PostListComponent, 
    children: [
      {path: 'add', component:PostAddComponent },
      {path: 'edit/:id', component:PostEditComponent }
    ]
  }
]

@NgModule({
  declarations: [
    PostListComponent,
    PostAddComponent,
    PostEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(POST_STATE_NAME,postReducer),
  ]
})
export class PostModule { }
