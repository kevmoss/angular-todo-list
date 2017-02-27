import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { TodoDataService } from './todo-data.service';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { ListComponent } from './list/list.component';

@NgModule({
    imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule
  ],
  declarations: [
    AppComponent,
    SearchComponent,
    ListComponent
  ],
  providers: [TodoDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
