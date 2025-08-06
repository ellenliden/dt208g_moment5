import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Course } from '../services/course.service';

@Component({
  selector: 'app-schedule',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './schedule.html',
  styleUrl: './schedule.css',
})
export class Schedule implements OnInit {
  savedCourses: Course[] = [];

  ngOnInit(): void {
    this.loadSavedCourses();
  }

  loadSavedCourses(): void {
    const saved = localStorage.getItem('savedCourses');
    if (saved) {
      this.savedCourses = JSON.parse(saved);
    }
  }

  removeFromSaved(courseCode: string): void {
    this.savedCourses = this.savedCourses.filter(c => c.courseCode !== courseCode);
    localStorage.setItem('savedCourses', JSON.stringify(this.savedCourses));
  }
}
