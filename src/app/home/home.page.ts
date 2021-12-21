import { Component } from '@angular/core';
import { MEAL_ListItem } from '../model';
import { MealService } from '../services/meal-api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  meals: MEAL_ListItem[] | null = null;

  constructor(private mealService: MealService) {
    this.loadData();
  }

  loadData() {
    console.log('loading...');
    this.mealService
      .findByCategory("Seafood")
      .subscribe((meals: MEAL_ListItem[]) => {
        console.log(meals);
        this.meals = meals;
    })
  }

}
