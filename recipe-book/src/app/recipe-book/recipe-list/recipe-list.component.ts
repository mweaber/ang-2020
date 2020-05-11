import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'Desc Ex Text', 'https://media.newyorker.com/photos/5d13d9c28be7a80008baaf21/master/w_1280%2Cc_limit/Zeller-Cream-Cheese.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
