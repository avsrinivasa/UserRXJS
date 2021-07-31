import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { userreducer } from './user/user.reducer';
import { FormsModule } from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({users:userreducer}),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([])
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
