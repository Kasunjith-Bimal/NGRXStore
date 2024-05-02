import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { authenticatedUser, isAuthenticated } from 'src/app/auth/state/auth.selector';
import { User } from 'src/app/model/user.model';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isAuthenticated! : Observable<boolean>;
  authenticatedUserDetail? : Observable<User | null>;
  constructor(private store : Store<AppState>){}
  
  
  ngOnInit(): void {
   this.isAuthenticated = this.store.select(isAuthenticated);
   this.authenticatedUserDetail = this.store.select(authenticatedUser);
  }
  

}
