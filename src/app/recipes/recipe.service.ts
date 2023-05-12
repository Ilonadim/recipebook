import {Recipe} from "./recipe.model";
import {EventEmitter} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('Tasty Steak',
      'A super easy way to prepare tasty steak',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBsZGIZMkdLvAJd8--IdhBRze01osaLx0umw&usqp=CAU'),
    [
      new Ingredient('Meat', 1),
      new Ingredient('olive oil', 1)
    ]),
    new Recipe(
      'Burger',
      'this is simply a test',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBsZGIZMkdLvAJd8--IdhBRze01osaLx0umw&usqp=CAU',
  [
    new Ingredient('Buns', 2),
  new Ingredient('Meat', 1)
    ]
)
  ];
  getRecipes() {
    return this.recipes.slice();
  }
}
