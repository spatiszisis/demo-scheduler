import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './routing.module';
import { CommonModule } from '@angular/common';
import { FlatpickrModule } from 'angularx-flatpickr';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { AppointmentFormComponent } from './appointment-form/appointment-form.component';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        CalendarModule.forRoot({
            provide: DateAdapter,
            useFactory: adapterFactory,
        }),
        FlatpickrModule.forRoot(),
        AppRoutingModule,
        NgbDatepickerModule
    ],
    declarations: [AppComponent, AppointmentFormComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
