import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter/counter.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { PostAddComponent } from './posts/post-add/post-add.component';
import { PostEditComponent } from './posts/post-edit/post-edit.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'counter', component: CounterComponent },
  { 
    path: 'posts',
    component: PostListComponent, 
    children: [
      {path: 'add', component:PostAddComponent },
      {path: 'edit/:id', component:PostEditComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
