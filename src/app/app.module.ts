import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';

import { RecipeDetailsComponent } from './components/Recipe/recipe-details/recipe-details.component';
import { ShoppingListEditComponent } from './components/Shopping/shoppingList/shopping-list-edit/shopping-list-edit.component';
import {ShoppingListComponent} from './components/Shopping/shopping-list/shopping-list.component';
import {RecipeComponent}  from './components/Recipe/Recipe.component';
import {RecipeItemComponent}  from './components/Recipe/recipeList/recipe-item/recipe-item.component';
import {RecipeListComponent}  from './components/Recipe/recipeList/recipe-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipeDetailsComponent,
    ShoppingListEditComponent,
    ShoppingListComponent,
    RecipeComponent,
    RecipeItemComponent,
    RecipeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
