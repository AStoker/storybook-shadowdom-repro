import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { MyButtonComponent } from './my-button/my-button.component';
import { SlotButtonComponent } from './slot-button/slot-button.component';

const materialModules = [
  MatButtonModule,
  MatIconModule,
];

@NgModule({
  declarations: [
    AppComponent,
    MyButtonComponent,
    SlotButtonComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ...materialModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
