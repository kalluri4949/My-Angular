// import { EventEmitter, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  // @Output() emitRecipe = new EventEmitter<string>();
  // @Output() emitShopping = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}
  // loadRecipes(): void {
  //   console.log('recipe clicked');
  //   this.emitRecipe.emit('recipe');
  // }
  // loadShopping(): void {
  //   console.log('shopping clicked');
  //   this.emitRecipe.emit('shopping');
  // }
}
