import { Component } from '@angular/core';
import { CounterState } from '../state/counter.state';
import { Store } from '@ngrx/store';
import { customIncrement } from '../state/counter.action';

@Component({
  selector: 'app-counter-custom-input',
  templateUrl: './counter-custom-input.component.html',
  styleUrls: ['./counter-custom-input.component.css']
})
export class CounterCustomInputComponent {
 
  constructor(private store : Store<{counter:CounterState}>) {
  }
  value : number = 0;

  OnAddCounter(){
    this.store.dispatch(customIncrement({value : this.value}));
  }
}
