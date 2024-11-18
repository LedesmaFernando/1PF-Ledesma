import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../../core/services/courses.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesDialogComponent } from './courses-dialog/courses-dialog.component';
import { Course } from './models';



@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'date', 'actions'];
  dataSource: Course[] = [];
  // dataSource = new MatTableDataSource<Course>();


  constructor(
    private courseService: CoursesService,
    private matDialog:MatDialog,
    private router:Router,
    private activatedRoute:ActivatedRoute){}


  ngOnInit(): void {
    this.loadCourses();
    
  }

  loadCourses(): void {
    this.courseService.getCourses().subscribe({
      next:(courses) => {
        this.dataSource = courses;
        // this.dataSource.data = courses;        
      }
    })
  }

  onDeleteCourses(id:string):void{
    if(confirm("estas seguro?")){
      this.courseService.removeCourseById(id).subscribe({
        next:(courses)=> {this.dataSource = courses}
      })
    }
  }

  openModalCourse(editingCourse?:Course): void{
    this.matDialog.open(CoursesDialogComponent, {
      data: {
        editingCourse,
      }
    })
    .afterClosed()
    .subscribe({
      next:(result)=>{
        console.log("Recibimos: ", result);

        if(!!result){

          if(editingCourse){
            this.handleUpdate(editingCourse.id, result)  
          }else{
            this.courseService.createCourse(result)
            .subscribe({ next: ()=> this.loadCourses()});
          //   this.dataSource = [...this.dataSource,{
          //   ...result, id: this.dataSource.length+1, createdAt: new Date()
          // }]
          }
        }
      }
    })
  }

  handleUpdate(id:string, update: Course):void{
    this.courseService.updateCoursesById(id, update).subscribe({
      next:(course) => {this.dataSource = course}
    })
  }
 

}
