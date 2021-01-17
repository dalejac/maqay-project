import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/home.component';
import { CategoriesComponent } from './modules/categories/categories.component';
import { CardsComponent } from './modules/cards/cards.component';
import { NavBarComponent } from './modules/nav-bar/nav-bar.component'
import { ProposalsService } from './services/proposals.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CategoriesComponent,
    CardsComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [ ProposalsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }