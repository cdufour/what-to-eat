import { Component, OnInit } from '@angular/core';
import { MEAL_ListItem, MEAL_Category } from '../model';
import { MealService } from '../services/meal-api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  meals: MEAL_ListItem[] | null = null;
  categories: string[] = [];
  defaultCategory: string = 'Chicken';

  constructor(private mealService: MealService) {}

  ngOnInit(): void {
    this.loadMeals();

    // Object.keys retroune un tableau des clés de l'objet passé en entrée
    this.categories = Object.keys(MEAL_Category);
  }

  loadMeals(): void {
    this.mealService
      .findByCategory(this.defaultCategory)
      .subscribe((meals: MEAL_ListItem[]) => {
        this.meals = meals;
    })
  }

  onChange(event: any): void {
    // récupère la nouvelle valeur du ion-select
    this.defaultCategory = event.target.value;
    this.loadMeals();
  }

}
