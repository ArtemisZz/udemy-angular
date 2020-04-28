import { Component, OnInit } from '@angular/core';
import {CategoryService} from "../../service/category.service";
import {Category} from "../../common/category";

@Component({
  selector: 'app-top-category',
  templateUrl: './top-category.component.html',
  styleUrls: ['./top-category.component.scss']
})
export class TopCategoryComponent implements OnInit {

  categories: Category[];

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getCategoryList();
  }


  private getCategoryList() {
    this.categoryService.getCategoryList().subscribe(
      data => {
        this.categories = data;
      }
    )
  }
}
