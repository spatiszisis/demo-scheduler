import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbCalendar, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { CalendarEvent, EventColor } from 'calendar-utils';
import { addDays, endOfDay, startOfDay, subDays } from 'date-fns';

const colors: Record<string, EventColor> = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3',
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF',
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA',
  },
};

@Component({
  selector: 'app-appointment-form',
  templateUrl: './appointment-form.component.html',
  styleUrl: './appointment-form.component.scss'
})
export class AppointmentFormComponent implements OnInit {
  @Output()
  onSubmit: EventEmitter<any> = new EventEmitter();

  appointmentForm: FormGroup;
  today = inject(NgbCalendar).getToday();
  model: NgbDateStruct;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();
  }

  onCreate() {
    console.log(this.appointmentForm.value);
    const {fullName, email, date, hours, description} = this.appointmentForm.value;
    const event: CalendarEvent = {
      title: fullName,
      start: date,
      end: date,
      color: colors.red,
      draggable: true,
      resizable: {
        beforeStart: true,
        afterEnd: true,
      },
    };
    this.onSubmit.emit(event);
  }

  private buildForm() {
    this.appointmentForm = this.formBuilder.group({
      fullName: ['', [Validators.required]],
      date: [new Date()],
      hourRange: [0],
      email: ['', [Validators.required]],
      description: ['']
    });
  }
}
