import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DocumentAutomationModule } from './document-automation/document-automation.module';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DocumentAutomationModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
