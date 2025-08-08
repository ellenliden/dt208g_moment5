import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Course } from './course.service';

@Injectable({
  providedIn: 'root',
})
export class ScheduleService {
  private savedCoursesSubject = new BehaviorSubject<Course[]>([]);
  public savedCourses$ = this.savedCoursesSubject.asObservable();

  constructor() {
    this.loadSavedCourses();
  }

  // Ladda sparade kurser från localStorage
  private loadSavedCourses(): void {
    const saved = localStorage.getItem('savedCourses');
    if (saved) {
      const courses = JSON.parse(saved);
      this.savedCoursesSubject.next(courses);
    }
  }

  // Lägg till kurs till ramschema
  addCourse(course: Course): boolean {
    const currentCourses = this.savedCoursesSubject.value;
    const exists = currentCourses.find(
      (c) => c.courseCode === course.courseCode
    );

    if (!exists) {
      const updatedCourses = [...currentCourses, course];
      this.savedCoursesSubject.next(updatedCourses);
      this.updateLocalStorage(updatedCourses);
      return true;
    }
    return false;
  }

  // Ta bort kurs från ramschema
  removeCourse(courseCode: string): void {
    const currentCourses = this.savedCoursesSubject.value;
    const updatedCourses = currentCourses.filter(
      (c) => c.courseCode !== courseCode
    );
    this.savedCoursesSubject.next(updatedCourses);
    this.updateLocalStorage(updatedCourses);
  }

  // Kontrollera om kurs är sparad
  isCourseSaved(courseCode: string): boolean {
    const currentCourses = this.savedCoursesSubject.value;
    return currentCourses.some((c) => c.courseCode === courseCode);
  }

  // Hämta antal sparade kurser
  getSavedCoursesCount(): number {
    return this.savedCoursesSubject.value.length;
  }

  // Beräkna totala poäng
  getTotalPoints(): number {
    return this.savedCoursesSubject.value.reduce(
      (total, course) => total + course.points,
      0
    );
  }

  // Rensa alla sparade kurser
  clearSchedule(): void {
    this.savedCoursesSubject.next([]);
    this.updateLocalStorage([]);
  }

  // Uppdatera localStorage
  private updateLocalStorage(courses: Course[]): void {
    localStorage.setItem('savedCourses', JSON.stringify(courses));
  }
} 