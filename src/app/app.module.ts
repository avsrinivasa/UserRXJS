import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { userreducer } from './user/user.reducer';
import { FormsModule } from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { UserEffects } from './user/user.effect';
import { UserService } from './user/user.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({users:userreducer}),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([UserEffects])
    ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
