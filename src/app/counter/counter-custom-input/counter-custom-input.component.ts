import { Component, OnInit } from '@angular/core';
import { CounterState } from '../state/counter.state';
import { Store } from '@ngrx/store';
import { changeChanelName, customIncrement } from '../state/counter.action';
import { Observable } from 'rxjs';
import { getChanelName } from '../state/counter.selector';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-counter-custom-input',
  templateUrl: './counter-custom-input.component.html',
  styleUrls: ['./counter-custom-input.component.css']
})
export class CounterCustomInputComponent implements OnInit {
 
  constructor(private store : Store<AppState>) {
  }
  ngOnInit(): void {
  // this.store.select(getChanelName).subscribe((data)=>{
  //   console.log("counter2",data);
  //   this.chanelName = data;
  // });
  this.$chanelName =  this.store.select(getChanelName);
  console.log("customInput");
  }
  value : number = 0;
  $chanelName? :Observable<string>;
  changeChanelName : string = '';

  OnAddCounter(){
    this.store.dispatch(customIncrement({value : this.value}));
  }

  OnChangeChanelName(){
    this.store.dispatch(changeChanelName({chanleName : this.changeChanelName}));
  }
}
