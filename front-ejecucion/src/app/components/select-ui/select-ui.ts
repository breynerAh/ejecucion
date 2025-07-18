import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AbstractControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-select-ui',
  imports: [MatInputModule, ReactiveFormsModule, CommonModule],
  templateUrl: './select-ui.html',
  styleUrl: './select-ui.scss'
})
export class SelectUI {
  @Input() label: string = '';
  @Input() fieldName: string = '';
  @Input() formSubmitted?: boolean = false;
  @Input() errorMessage?: { [key: string]: string } = {};
  @Input() formGroup!: FormGroup;
  @Input() options: { id: number; value: string }[] = []
  @Input() onChange?: (item?: any) => void

  get control(): AbstractControl | null {
    return this.formGroup?.get(this.fieldName) || null;
  }

  getActiveErrors(): string[] {
    const control = this.control;
    if (!control || !control?.errors || !(control?.touched || this?.formSubmitted)) return [];
    return Object.keys(control?.errors).filter(key => this?.errorMessage?.[key]);
  }
}
