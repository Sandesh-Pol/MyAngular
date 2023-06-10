import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImgesDynamicComponent } from './imges-dynamic/imges-dynamic.component';
import * as parantComponent from './parant/parant.component';
import { ChildComponent } from './child/child.component';
import { NormalComponent } from './normal/normal.component';
import { AComComponent } from './Comp-Communication/a-com/a-com.component';
import { BComComponent } from './Comp-Communication/b-com/b-com.component';
import { TwoWayDataBindingComponent } from './Comp-Communication/two-way-data-binding/two-way-data-binding.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ImgesDynamicComponent,
    parantComponent.ParantComponent,
    ChildComponent,
    NormalComponent,
    AComComponent,
    BComComponent,
    TwoWayDataBindingComponent
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
