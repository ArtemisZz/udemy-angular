import { Component, OnInit } from '@angular/core';
import {CategoryService} from "../../service/category.service";
import {Category} from "../../common/category";

@Component({
  selector: 'app-course-category-menu',
  templateUrl: './course-category-menu.component.html',
  styleUrls: ['./course-category-menu.component.scss']
})
export class CourseCategoryMenuComponent implements OnInit {

   categories: Category[];

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getCategoryList();
  }

  getCategoryList(){
    this.categoryService.getCategoryList().subscribe(
      data => {
        console.log(data);
        this.categories = data;
      }
    )
  }

}
