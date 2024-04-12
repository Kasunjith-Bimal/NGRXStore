import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState } from '../state/counter.state';


@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css']
})
export class CounterOutputComponent implements OnInit{
 
  counter! : number; 
  constructor(private store: Store<{counter: CounterState}>) {
  }
  ngOnInit(): void {
    this.store.select('counter').subscribe((data)=>{
      console.log(data);
       this.counter = data.counter;
    });
  }
}
