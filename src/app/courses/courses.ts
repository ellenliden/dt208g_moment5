import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseService, Course } from '../services/course.service';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './courses.html',
  styleUrl: './courses.css',
})
export class Courses implements OnInit {
  courses: Course[] = [];
  loading: boolean = true;

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.loadCourses();
  }

  private loadCourses(): void {
    this.courseService.getCourses().subscribe({
      next: (courses) => {
        this.courses = courses;
        this.loading = false;
      },
      error: (error) => {
        console.error('Fel vid laddning av kurser:', error);
        this.loading = false;
      },
    });
  }
}
