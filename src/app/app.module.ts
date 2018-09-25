import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShowContentComponent } from './show-content/show-content.component';
import { DataLoadService } from './service/data-load.service';

@NgModule({
  declarations: [
    AppComponent,
    ShowContentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    DataLoadService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
