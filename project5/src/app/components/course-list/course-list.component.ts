import { Component, OnInit } from '@angular/core';
import { Courses } from '../../domains/courses';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  foxHollow: Courses[];
  spanishOaks: Courses[];
  thanksgivingPoint: Courses[];

  constructor(
    private coursesService: CoursesService
  ) { }

  ngOnInit() {
    this.coursesService.getFoxHollow().subscribe(foxHollow => {
      this.foxHollow = foxHollow.data;
    });

    this.coursesService.getSpanishOaks().subscribe(spanishOaks => {
      this.spanishOaks = spanishOaks.data;
    });

    this.coursesService.getThanksgivingPoint().subscribe(thanksgivingPoint => {
      this.thanksgivingPoint = thanksgivingPoint.data;
    });
  }

  setActiveCourse(activeCourse: Courses) {
    this.coursesService.activeCourse.next(activeCourse);
    console.log(activeCourse);
  }
}
