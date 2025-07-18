import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AbstractControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-input-ui',
  imports: [MatInputModule, ReactiveFormsModule, CommonModule],
  templateUrl: './input-ui.html',
  styleUrl: './input-ui.scss'
})
export class InputUI {

  @Input() label: string = '';
  @Input() fieldName: string = '';
  @Input() type?: string = '';
  @Input() formSubmitted: boolean = false;
  @Input() errorMessage: { [key: string]: string } = {};
  @Input() formGroup!: FormGroup;

  errorInput: boolean = false;

  get control(): AbstractControl | null {
    return this.formGroup?.get(this.fieldName) || null;
  }

  getActiveErrors(): any[] {
    const control = this?.control;
    if (!control || !control?.errors || !(control?.touched || this?.formSubmitted)) return [];
    return Object.keys(control?.errors).filter(key => this?.errorMessage[key]);
  }
}
