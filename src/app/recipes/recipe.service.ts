import {Subject} from "rxjs";
import {Recipe} from "./recipe.model";
import {Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";


@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
  recipesChanges = new Subject()

  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Steak',
      'A super easy way to prepare tasty steak',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBsZGIZMkdLvAJd8--IdhBRze01osaLx0umw&usqp=CAU',
    [
      new Ingredient('Meat', 1),
      new Ingredient('olive oil', 1)
    ]),
    new Recipe(
      'Burger',
      'burger recipe',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBsZGIZMkdLvAJd8--IdhBRze01osaLx0umw&usqp=CAU',
  [
    new Ingredient('Buns', 2),
  new Ingredient('Meat', 1)
    ]
)
  ];
  constructor(private slService: ShoppingListService) {
  }
  getRecipes() {
    return this.recipes.slice();
  }
  getRecipe(id: number) {
    return this.recipes[id];
  }
  addIngredientsToShoppingList(ingredients: Ingredient[]) {
this.slService.addIngredients(ingredients);
  }
  addRecipe(recipe: Recipe) {
this.recipes.push(recipe);
this.recipesChanges.next(this.recipes.slice());
  }
  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanges.next(this.recipes.slice());
  }
  deleteRecipe(index: number) {
    this.recipes.slice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
