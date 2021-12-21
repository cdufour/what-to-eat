import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { MealPage } from './meal.page';
import { MealPageRoutingModule } from './meal-routing.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    MealPageRoutingModule
  ],
  declarations: [MealPage]
})
export class MealPageModule {}
