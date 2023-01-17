import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';

import { GeneralModule } from './components/general/general.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, GeneralModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
