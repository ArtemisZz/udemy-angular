import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { AlertComponent } from './component/alert/alert.component';
import { MainSearchComponent } from './component/main-search/main-search.component';
import { CourseListComponent } from './component/course-list/course-list.component';
import { CourseCategoryMenuComponent } from './component/course-category-menu/course-category-menu.component';
import { Routes, RouterModule } from '@angular/router';
import {HttpClientModule} from "@angular/common/http";
import { TopCategoryComponent } from './component/top-category/top-category.component';
import { StudentReviewComponent } from './component/student-review/student-review.component';

const routes: Routes = [
  { path: 'courses', component: CourseListComponent },
  { path: 'category/:id', component: CourseListComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AlertComponent,
    MainSearchComponent,
    CourseListComponent,
    CourseCategoryMenuComponent,
    TopCategoryComponent,
    StudentReviewComponent,

  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
