import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './store/app.state';
import { Observable } from 'rxjs';
import { getErrorMessage, getLoading } from './store/shared/shared.selector';
import { autoLogin } from './auth/state/auth.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  showLoading! : Observable<boolean>;
  errorMessage! :Observable<string>;
  constructor(private store : Store<AppState>) {
  }

  ngOnInit(): void {
    this.showLoading = this.store.select(getLoading)
    this.errorMessage = this.store.select(getErrorMessage);
    this.store.dispatch(autoLogin())
  }
  title = 'ngrxstore';
}
