import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Course {
  courseCode: string;
  subjectCode: string;
  level: string;
  progression: string;
  courseName: string;
  points: number;
  institutionCode: string;
  subject: string;
  syllabus: string;
}

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  constructor(private http: HttpClient) {}

  // Hämta alla kurser från JSON-filen
  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>('/miun_courses.json');
  }
}
