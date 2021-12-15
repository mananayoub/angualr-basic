import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadingComponent } from './heading/heading.component';
import { HeadingDataComponent } from './heading/heading-data/heading-data.component';
import { FormsModule } from '@angular/forms';
import { EmpComponent } from './emp/emp.component';
import { EmpCountComponent } from './emp/emp-count/emp-count.component';


@NgModule({
  declarations: [
    AppComponent,
    HeadingComponent,
    HeadingDataComponent,
    EmpComponent,
    EmpCountComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
