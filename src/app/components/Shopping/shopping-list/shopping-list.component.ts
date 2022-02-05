import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../../shared/Ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('apples', 5),
    new Ingredient('Peppermint', 2),
    new Ingredient('Pineapple', 1),
    new Ingredient('Cheese', 12),
  ];
  constructor() {}

  ngOnInit(): void {}
}
