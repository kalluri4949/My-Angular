import { Ingredient } from './../shared/ingredient.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Butter Paneer',
      'Best Andhra Veggie Curry',
      'https://www.indianhealthyrecipes.com/wp-content/uploads/2014/11/paneer-butter-masala-recipe-2-500x500.jpg',
      [new Ingredient('Paneer', 10), new Ingredient('milk', 1)]
    ),
    new Recipe(
      'Biryani',
      'Special Andhra spicy chicken biryani',
      'https://yummyindiankitchen.com/wp-content/uploads/2017/06/chicken-biryani-eid-special-recipe-ramadan-recipes-hyderabadi-chicken-biryani.jpg',
      [new Ingredient('chicken', 2), new Ingredient('curd', 1)]
    ),
  ];
  recipeSelected = new EventEmitter<Recipe>();
  constructor(private shoppingListService: ShoppingListService) {}
  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }
  getRecipe(id: number): Recipe {
    return this.recipes[id];
  }
  addIngredientsToShoppingList(ingredients: Ingredient[]): void {
    this.shoppingListService.addIngredients(ingredients);
  }
}
