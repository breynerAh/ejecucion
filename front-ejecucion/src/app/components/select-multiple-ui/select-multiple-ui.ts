import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AbstractControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatOptionModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-select-multiple-ui',
  imports: [
    MatInputModule,
    ReactiveFormsModule,
    CommonModule,
    MatSelectModule,
    MatOptionModule
  ],
  templateUrl: './select-multiple-ui.html',
  styleUrl: './select-multiple-ui.scss'
})
export class SelectMultipleUI {
  @Input() label: string = '';
  @Input() fieldName: string = '';
  @Input() formSubmitted: boolean = false;
  @Input() errorMessage?: { [key: string]: string } = {};
  @Input() formGroup!: FormGroup;
  @Input() options: { id: number; value: string }[] = []

  get control(): AbstractControl | null {
    return this.formGroup?.get(this.fieldName) || null;
  }

  getActiveErrors(): string[] {
    const control = this?.control;
    if (!control || !control?.errors || !(control?.touched || this?.formSubmitted)) return [];
    return Object.keys(control?.errors).filter(key => this?.errorMessage?.[key]);
  }
}
