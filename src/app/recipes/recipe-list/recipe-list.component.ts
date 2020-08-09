import { RecipeService } from './../recipe.service';
import { Recipe } from './../recipe.model';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  // @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[];
  constructor(
    private recipeservice: RecipeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.recipes = this.recipeservice.getRecipes();
  }
  onAddRecipe(): void {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
  // onRecipeSelected(recipe: Recipe): void {
  //   this.recipeWasSelected.emit(recipe);
  //   // console.log(recipe);
  // }
}
