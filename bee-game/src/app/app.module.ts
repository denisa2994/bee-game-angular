import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { ButtonComponent } from './button/button.component';
import { BeesComponent } from './bees/bees.component';


@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    ButtonComponent,
    BeesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
