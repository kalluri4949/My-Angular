import { EventEmitter } from '@angular/core';
import { Ingredient } from './../shared/ingredient.model';
export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('apples', 5),
    new Ingredient('bananas', 12),
  ];
  //  addIngredient = new EventEmitter<Ingredient>();
  getIngredients(): Ingredient[] {
    return this.ingredients.slice();
  }
  addIngredient(ingredient: Ingredient): void {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
  addIngredients(ingredients: Ingredient[]): void {
    // tslint:disable-next-line:prefer-const
    // for ( let ingredient of ingredients) {
    //   this.ingredients.push(ingredient);
    // }
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
