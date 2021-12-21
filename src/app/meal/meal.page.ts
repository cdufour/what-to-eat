import { Component, OnInit } from "@angular/core";
import { __core_private_testing_placeholder__ } from "@angular/core/testing";
import { ActivatedRoute } from "@angular/router";
import { MEAL_Meal } from "../model";
import { MealService } from "../services/meal-api.service";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";

@Component({
  selector: 'meal-page',
  templateUrl: 'meal.page.html'
})
export class MealPage implements OnInit {
  meal: MEAL_Meal | null = null;
  ingredients: string[] = [];

  constructor(
    private mealService: MealService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    // récupère le paramètre id de l'url
    const mealId: string = this.route.snapshot.paramMap.get('id');
  
    this.mealService.findById(mealId)
    .subscribe((meal: MEAL_Meal) => {
      this.meal = meal;
      this.getIngredients();
    })
  }

  private getIngredients(): void {
    // les repas ont 20 ingrédients au max
    for (let i=1; i<21; i++) {
      let ingredient = this.meal['strIngredient' + i];
      if (ingredient) this.ingredients.push(
        ingredient + ' - ' + this.meal['strMeasure' + i]);
    }
  }

  private getYoutubeUrl(): SafeResourceUrl {
    const youtubeLink = this.meal.strYoutube.replace('watch?v=', 'embed/');
    return this.sanitizer.bypassSecurityTrustResourceUrl(youtubeLink);
  }

  
}