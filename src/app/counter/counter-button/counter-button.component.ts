import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-counter-button',
  templateUrl: './counter-button.component.html',
  styleUrls: ['./counter-button.component.css']
})
export class CounterButtonComponent {

  @Output() incement = new EventEmitter<void>();
  @Output() decrement = new EventEmitter<void>();
  @Output() reset = new EventEmitter<void>();
  
  OnIncrement(){
    this.incement.emit();
  }

  OnDecrement(){
    this.decrement.emit();
  }

  OnReset(){
    this.reset.emit();
  }
}
