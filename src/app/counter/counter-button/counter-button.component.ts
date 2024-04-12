import { Component, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState } from '../state/counter.state';
import { decrement, increment, reset } from '../state/counter.action';

@Component({
  selector: 'app-counter-button',
  templateUrl: './counter-button.component.html',
  styleUrls: ['./counter-button.component.css']
})
export class CounterButtonComponent {

  constructor(private store: Store<{counter: CounterState }>) {

  }
  // @Output() incement = new EventEmitter<void>();
  // @Output() decrement = new EventEmitter<void>();
  // @Output() reset = new EventEmitter<void>();
  
  OnIncrement(){
    this.store.dispatch(increment())
  }

  OnDecrement(){
    this.store.dispatch(decrement())
  }

  OnReset(){
    this.store.dispatch(reset())
  }
}
