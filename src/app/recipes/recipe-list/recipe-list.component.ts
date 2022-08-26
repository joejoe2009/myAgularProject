import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://www.seriouseats.com/thmb/u8LF_VE-D3zStw-r24fhWleYieM=/880x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/20220525-LAVASH-BEAN-TRIANGLES-ANDREW-JANJIGIAN-Hero-aa7b65a0f62246a9924066a57c964548.JPG'),
    new Recipe('Another Test Recipe', 'This is simply a test', 'https://www.seriouseats.com/thmb/u8LF_VE-D3zStw-r24fhWleYieM=/880x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/20220525-LAVASH-BEAN-TRIANGLES-ANDREW-JANJIGIAN-Hero-aa7b65a0f62246a9924066a57c964548.JPG')
  ];
  

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
