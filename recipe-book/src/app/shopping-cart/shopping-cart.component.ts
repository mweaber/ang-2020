import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 2),
    new Ingredient('Banana', 5)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
