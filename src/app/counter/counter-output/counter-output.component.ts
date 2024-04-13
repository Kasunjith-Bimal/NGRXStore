import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState } from '../state/counter.state';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css']
})
export class CounterOutputComponent implements OnInit{
 
  //counter! : number; 
  $counter! :Observable<CounterState>;
  constructor(private store: Store<{counter: CounterState}>) {
  }
  ngOnInit(): void {
    this.$counter = this.store.select('counter');
    // this.store.select('counter').subscribe((data)=>{
    //   console.log(data);
    //    this.counter = data.counter;
    // });
  }
}
