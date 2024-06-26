import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState } from '../state/counter.state';
import { Observable } from 'rxjs';
import { getCounter } from '../state/counter.selector';
import { AppState } from 'src/app/store/app.state';


@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css']
})
export class CounterOutputComponent implements OnInit{
 
  //counter! : number; 
  $counter! :Observable<number>;
  constructor(private store: Store<AppState>) {
  }
  ngOnInit(): void {
    this.$counter = this.store.select(getCounter);
    console.log("custom output");
    // this.store.select('counter').subscribe((data)=>{
    //   console.log("counter1",data);
    //    //this.counter = data.counter;
    // });
  }
}
