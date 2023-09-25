import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateformsComponent } from './templateforms/templateforms.component';
import { FormsModule } from '@angular/forms';
import { ReactiveComponent } from './reactive/reactive.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactformsComponent } from './reactforms/reactforms.component';
@NgModule({
  declarations: [
    AppComponent,
    TemplateformsComponent,
    ReactiveComponent,
    ReactformsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
