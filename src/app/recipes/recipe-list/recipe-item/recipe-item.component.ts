import { RecipeService } from './../../recipe.service';
import { Recipe } from './../../recipe.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  // @Output() selectedRecipe = new EventEmitter<void>();
  constructor(private recipeservice: RecipeService) {}

  ngOnInit(): void {}
  recipeSelected(): void {
    // this.selectedRecipe.emit();
    // console.log('from item comp');
    this.recipeservice.recipeSelected.emit(this.recipe);
  }
}
