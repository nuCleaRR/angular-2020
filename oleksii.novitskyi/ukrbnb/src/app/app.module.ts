import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppHotelsModule } from './app-hotels/app-hotels.module';

// import { MatButton } from '@angular/material/button/button';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    AppHotelsModule,
    // MatButton,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
