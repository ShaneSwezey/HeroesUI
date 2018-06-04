import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeroesindexComponent } from './heroesindex/heroesindex.component';
import { routing } from '../routes';
import { HerodetailComponent } from './herodetail/herodetail.component';

// RouterModule.forRoot(appRoutes),

@NgModule({
  declarations: [
    AppComponent,
    HeroesindexComponent,
    HerodetailComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
