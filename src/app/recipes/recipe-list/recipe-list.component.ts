import { Recipe } from './../recipe.model';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'Testing',
      'we are testing the recipe',
      'https://img.taste.com.au/5F6D7lZ6/taste/2016/11/indian-recipes-116953-1.jpg'
    ),
    new Recipe(
      'Testing2',
      'we are testing the recipe 2',
      'https://img.taste.com.au/5F6D7lZ6/taste/2016/11/indian-recipes-116953-1.jpg'
    ),
  ];
  constructor() {}

  ngOnInit(): void {}
  onRecipeSelected(recipe: Recipe): void {
    this.recipeWasSelected.emit(recipe);
    // console.log(recipe);
  }
}
