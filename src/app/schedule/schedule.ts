import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Course } from '../services/course.service';
import { ScheduleService } from '../services/schedule.service';

@Component({
  selector: 'app-schedule',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './schedule.html',
  styleUrl: './schedule.css',
})
export class Schedule implements OnInit {
  savedCourses: Course[] = [];

  constructor(private scheduleService: ScheduleService) {}

  ngOnInit(): void {
    this.scheduleService.savedCourses$.subscribe((courses) => {
      this.savedCourses = courses;
    });
  }

  // beräknar antal sparade kurser
  getSavedCoursesCount(): number {
    return this.scheduleService.getSavedCoursesCount();
  }

  // beräknar totala poäng för sparade kurser
  getTotalPoints(): number {
    return this.scheduleService.getTotalPoints();
  }

  removeFromSaved(courseCode: string): void {
    this.scheduleService.removeCourse(courseCode);
  }
}
