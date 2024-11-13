import { Component } from '@angular/core';
import { ClassesService } from '../../../core/services/classes.service';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrl: './classes.component.scss'
})
export class ClassesComponent {

  constructor(private classesServices:ClassesService){
    
  }

}
