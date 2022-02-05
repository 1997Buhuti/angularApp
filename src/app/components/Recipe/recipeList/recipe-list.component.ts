import { Component, OnInit } from '@angular/core';
import {Recipe} from "../Recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  recipes:Recipe[]=[
    new Recipe(
      'Test Recipe','This is a test ',
      'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/bi5v2lagtvudjgt8wuug'
    ),
    new Recipe(
      'Test Recipe','This is a test ',
      'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/bi5v2lagtvudjgt8wuug'
    ),
    new Recipe(
      'Test Recipe','This is a test ',
      'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/bi5v2lagtvudjgt8wuug'
    )
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
