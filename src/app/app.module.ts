import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgforExampleComponent } from './ngfor-example/ngfor-example.component';
import { NgforExampleWitouthMaterialComponent } from './ngfor-example-witouth-material/ngfor-example-witouth-material.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTableModule } from '@angular/material/table';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    NgforExampleComponent,
    NgforExampleWitouthMaterialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    MatRadioModule,
    FormsModule,
    MatTableModule     // Modulo de MatTable
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
