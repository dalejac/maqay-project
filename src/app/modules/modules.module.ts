import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './categories/categories.component';
import { CardsComponent } from './categories/components/cards/cards.component';
import { NavBarComponent } from './categories/components/nav-bar/nav-bar.component';



@NgModule({
  declarations: [HomeComponent, CategoriesComponent, CardsComponent, NavBarComponent],
  imports: [
    CommonModule
  ]
})
export class ModulesModule { }
