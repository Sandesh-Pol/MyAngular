import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImgesDynamicComponent } from './imges-dynamic/imges-dynamic.component';
import * as parantComponent from './parant/parant.component';
import { ChildComponent } from './child/child.component';
import { NormalComponent } from './normal/normal.component';

@NgModule({
  declarations: [
    AppComponent,
    ImgesDynamicComponent,
    parantComponent.ParantComponent,
    ChildComponent,
    NormalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
