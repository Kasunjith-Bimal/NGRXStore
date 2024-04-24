import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter/counter.component';
import { CounterOutputComponent } from './counter/counter-output/counter-output.component';
import { CounterButtonComponent } from './counter/counter-button/counter-button.component';
import { CounterCustomInputComponent } from './counter/counter-custom-input/counter-custom-input.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter/state/counter.reducer';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppReducer } from './store/app.state';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CounterOutputComponent,
    CounterButtonComponent,
    CounterCustomInputComponent,
    HomeComponent,
    HeaderComponent,
    PostListComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    StoreModule.forRoot(AppReducer),
    AppRoutingModule,
    StoreDevtoolsModule.instrument({
      logOnly: !isDevMode(), // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
      trace: false, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
