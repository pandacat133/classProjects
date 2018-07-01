import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Courses } from '../domains/courses';

@Injectable()
export class CoursesService {
  activeCourse = new BehaviorSubject<Courses>(null);

  constructor(
    private http: HttpClient
  ) { }

  getFoxHollow(): Observable<any> {
    return this.http.get(`https://uxcobra.com/golfapi/course18300.txt`);
  }

  getThanksgivingPoint(): Observable<any> {
    return this.http.get(`https://uxcobra.com/golfapi/course11819.txt`);
  }

  getSpanishOaks(): Observable<any> {
    return this.http.get(`https://uxcobra.com/golfapi/course19002.txt`);
  }
}
