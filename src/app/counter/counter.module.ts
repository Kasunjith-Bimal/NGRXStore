import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { CounterOutputComponent } from './counter-output/counter-output.component';
import { CounterButtonComponent } from './counter-button/counter-button.component';
import { CounterCustomInputComponent } from './counter-custom-input/counter-custom-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './state/counter.reducer';
import { COUNTER_STATE_NAME } from './state/counter.selector';

const routes:Routes =[
  { path: '', component: CounterComponent }
]

@NgModule({
  declarations: [
    CounterComponent,
    CounterOutputComponent,
    CounterButtonComponent,
    CounterCustomInputComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(COUNTER_STATE_NAME,counterReducer),
    
  ]
})
export class CounterModule { }
