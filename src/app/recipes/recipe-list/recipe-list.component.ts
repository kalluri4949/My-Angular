import { RecipeService } from './../recipe.service';
import { Recipe } from './../recipe.model';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  // @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[];
  constructor(private recipeservice: RecipeService) {}

  ngOnInit(): void {
    this.recipes = this.recipeservice.getRecipes();
  }
  // onRecipeSelected(recipe: Recipe): void {
  //   this.recipeWasSelected.emit(recipe);
  //   // console.log(recipe);
  // }
}
