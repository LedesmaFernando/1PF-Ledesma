import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnrollmentRoutingModule } from './enrollment-routing.module';
import { EnrollmentComponent } from './enrollment.component';
import { EffectsModule } from '@ngrx/effects';
import { EnrollmentEffects } from './store/enrollment.effects';
import { StoreModule } from '@ngrx/store';
import { enrollmentFeature } from './store/enrollment.reducer';
import { SharedModule } from '../../../shared/shared.module';


@NgModule({
  declarations: [
    EnrollmentComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    EnrollmentRoutingModule,
    StoreModule.forFeature(enrollmentFeature),
    EffectsModule.forFeature([EnrollmentEffects]    
    )
  ]
})
export class EnrollmentModule { }
