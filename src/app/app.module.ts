import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { appReducer } from './store/app.state';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}),
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
