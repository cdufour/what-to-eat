import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MEAL_ListItem, MEAL_Meal } from '../model';
import { map } from 'rxjs/operators';

const MEAL_API = "https://www.themealdb.com/api/json/v1/1/";

@Injectable({
  providedIn: 'root'
})
export class MealService {

  // DI du client http d'angular
  constructor(private http: HttpClient) {}

  findByCategory(name: string): Observable<MEAL_ListItem[]> {
    // retourne l'observable
    return this.http
      .get<MEAL_ListItem[]>(MEAL_API + 'filter.php?c=Seafood')
      .pipe(
        map((res: any) => res.meals)
      )
      ;
  }

  findById(id: string): Observable<MEAL_Meal> {

    return this.http
      .get<MEAL_ListItem[]>(MEAL_API + 'lookup.php?i=' + id)
      .pipe(
        map((res: any) => res.meals[0])
      )
      ;
  }


}