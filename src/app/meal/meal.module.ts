import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { MealPage } from './meal.page';
import { MealPageRoutingModule } from './meal-routing.module';
import { LoaderComponent } from '../loader/loader.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    MealPageRoutingModule
  ],
  declarations: [MealPage, LoaderComponent]
})
export class MealPageModule {}
