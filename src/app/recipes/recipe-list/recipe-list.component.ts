import {Component, OnInit} from '@angular/core';
import { Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'this is simply a test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBsZGIZMkdLvAJd8--IdhBRze01osaLx0umw&usqp=CAU'),
    new Recipe('A test recipe', 'this is simply a test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBsZGIZMkdLvAJd8--IdhBRze01osaLx0umw&usqp=CAU')
  ];
  constructor() {
  }
ngOnInit() {
}
}
