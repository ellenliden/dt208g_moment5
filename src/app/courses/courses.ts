import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CourseService, Course } from '../services/course.service';
import { ScheduleService } from '../services/schedule.service';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './courses.html',
  styleUrl: './courses.css',
})
export class Courses implements OnInit {
  courses: Course[] = [];
  filteredCourses: Course[] = [];
  savedCourses: Course[] = [];
  loading: boolean = true;

  // Sökfunktion
  searchTerm: string = '';

  // Filtrering
  selectedSubject: string = '';
  selectedLevel: string = '';

  // Sortering
  sortBy: 'courseCode' | 'courseName' | 'points' | 'subject' = 'courseCode';

  // Filter-alternativ
  subjects: string[] = [];
  levels: string[] = [];

  constructor(
    private courseService: CourseService,
    private scheduleService: ScheduleService
  ) {}

  ngOnInit(): void {
    this.loadCourses();
    this.loadSavedCourses();

    // Prenumerera på ändringar i ramschema
    this.scheduleService.savedCourses$.subscribe((courses) => {
      this.savedCourses = courses;
    });
  }

  private loadCourses(): void {
    this.courseService.getCourses().subscribe({
      next: (courses) => {
        this.courses = courses;
        this.filteredCourses = courses;
        this.loading = false;

        // Hämta unika ämnen och nivåer för filter
        this.subjects = [...new Set(courses.map((c) => c.subject))].sort(
          (a, b) => a.localeCompare(b, 'sv-SE')
        );
        this.levels = [...new Set(courses.map((c) => c.level))].sort((a, b) =>
          a.localeCompare(b, 'sv-SE')
        );
      },
      error: (error) => {
        console.error('Fel vid laddning av kurser:', error);
        this.loading = false;
      },
    });
  }

  // Sökfunktion
  onSearch(): void {
    this.applyFilters();
  }

  // Ämnesfilter
  onSubjectChange(): void {
    this.applyFilters();
  }

  // Nivåfilter
  onLevelChange(): void {
    this.applyFilters();
  }

  // Sortering
  onSort(): void {
    this.applyFilters();
  }

  // Rensa alla filter
  clearFilters(): void {
    this.searchTerm = '';
    this.selectedSubject = '';
    this.selectedLevel = '';
    this.sortBy = 'courseCode';
    this.applyFilters();
  }

  // Applicera alla filter och sortering
  private applyFilters(): void {
    let filtered = [...this.courses];

    // Sökfilter
    if (this.searchTerm.trim()) {
      const term = this.searchTerm.toLowerCase();
      filtered = filtered.filter(
        (course) =>
          course.courseCode.toLowerCase().includes(term) ||
          course.courseName.toLowerCase().includes(term)
      );
    }

    // Ämnesfilter
    if (this.selectedSubject) {
      filtered = filtered.filter(
        (course) => course.subject === this.selectedSubject
      );
    }

    // Nivåfilter
    if (this.selectedLevel) {
      filtered = filtered.filter(
        (course) => course.level === this.selectedLevel
      );
    }

    // Sortering
    filtered.sort((a, b) => {
      switch (this.sortBy) {
        case 'courseCode':
          return a.courseCode.localeCompare(b.courseCode, 'sv-SE');
        case 'courseName':
          return a.courseName.localeCompare(b.courseName, 'sv-SE');
        case 'points':
          return a.points - b.points;
        case 'subject':
          return a.subject.localeCompare(b.subject, 'sv-SE');
        default:
          return 0;
      }
    });

    this.filteredCourses = filtered;
  }
  addToSaved(course: Course): void {
    this.scheduleService.addCourse(course);
  }

  removeFromSaved(courseCode: string): void {
    this.scheduleService.removeCourse(courseCode);
  }

  isCourseSaved(courseCode: string): boolean {
    return this.scheduleService.isCourseSaved(courseCode);
  }
  private loadSavedCourses(): void {
    // Ladda data från service
    this.scheduleService.savedCourses$.subscribe((courses) => {
      this.savedCourses = courses;
    });
  }
}
