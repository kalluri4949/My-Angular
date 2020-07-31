import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Recipe-Book';
  tabShow = 'recipe';
  onRecipeClick(tab: string): void {
    this.tabShow = tab;
  }
  onShoppingClick(tab: string): void {
    this.tabShow = tab;
  }
}
