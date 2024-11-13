import { Injectable } from '@angular/core';
import { Class } from '../../features/dashboard/classes/models';
import { Observable, of } from 'rxjs';


export let CLASS_DATA: Class[] = [
  {
    id:'5',
    name:'pintura',
    price: 500,
    categoryId:'7676'
  },
  {
    id:'6',
    name:'carpinteria',
    price: 300,
    categoryId:'8686'
  }
]


@Injectable({
  providedIn: 'root'
})
export class ClassesService {

  constructor() { }

  getClasses():Observable<Class[]>{
    return of(CLASS_DATA);
  }

  deleteById(id:string):Observable<Class[]>{
    CLASS_DATA = CLASS_DATA.filter((c)=> c.id != id);
    return this.getClasses();
  }
}
