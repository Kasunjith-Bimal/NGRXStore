import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter/counter.component';
import { CounterOutputComponent } from './counter/counter-output/counter-output.component';
import { CounterButtonComponent } from './counter/counter-button/counter-button.component';
import { CounterCustomInputComponent } from './counter/counter-custom-input/counter-custom-input.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CounterOutputComponent,
    CounterButtonComponent,
    CounterCustomInputComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
