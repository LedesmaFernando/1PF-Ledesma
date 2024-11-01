import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { UserFullNamePipe } from './pipes/user-full-name.pipe';
import { FontTitlesDirective } from './directives/font-titles.directive';
import {MatListModule} from '@angular/material/list';



@NgModule({
  declarations: [
    UserFullNamePipe,
    FontTitlesDirective
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatTableModule,
    UserFullNamePipe,
    FontTitlesDirective,
    MatListModule,

  ]
})
export class SharedModule { }
