import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../../core/services/courses.service';
import { Course } from '../users/models';
import { MatTableDataSource } from '@angular/material/table';



@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'class'];
  // dataSource: Course[] = [];
  dataSource = new MatTableDataSource<Course>();


  constructor(private courseService: CoursesService){}


  ngOnInit(): void {
    this.loadCourses();
    
  }

  loadCourses(): void {
    this.courseService.getCourse().subscribe({
      next:(courses) => {
        // this.dataSource = courses;
        this.dataSource.data = courses;        
      }
    })
  }


 

}
