import { Component, OnInit } from '@angular/core';
import { Courses } from '../../domains/courses';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {
  course: Courses;

  constructor(
    private coursesService: CoursesService
  ) { }

  ngOnInit() {
    this.coursesService.activeCourse.subscribe(getCourses => {
      this.course = getCourses;
    });
  }
}
