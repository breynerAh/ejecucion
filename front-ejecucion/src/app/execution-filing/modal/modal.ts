import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent
} from '@angular/material/dialog';
import { InputUI } from '../../components/input-ui/input-ui';
import { SelectUI } from "../../components/select-ui/select-ui";
import { SelectMultipleUI } from "../../components/select-multiple-ui/select-multiple-ui";

@Component({
  selector: 'app-modal',
  imports: [MatDialogContent, MatDialogActions, MatDialogClose, MatButtonModule, InputUI, ReactiveFormsModule, SelectUI, SelectMultipleUI],
  templateUrl: './modal.html',
  styleUrl: './modal.scss'
})
export class Modal {
  formBuilder = inject(FormBuilder);
  formSubmitted = false;

  formGroup = this.formBuilder.group({
    date: [null, Validators.required],
    typeBrigade: [null, Validators.required],
    resource: [null, Validators.required],
    item: [[], Validators.required]
  });

  optionsB = [
    { id: 1, value: 'Brigada 1' },
    { id: 2, value: 'Brigada 2' },
    { id: 3, value: 'Brigada 3' },
  ]

  optionsR = [
    { id: 1, value: 'Recurso 1' },
    { id: 2, value: 'Recurso 2' },
    { id: 3, value: 'Recurso 3' },
    { id: 4, value: 'Recurso 4' },
  ]

  optionsI = [
    { id: 1, value: 'Item 1' },
    { id: 2, value: 'Item 2' },
    { id: 3, value: 'Item 3' },
    { id: 4, value: 'Item 4' },
    { id: 5, value: 'Item 5' },
    { id: 6, value: 'Item 6' },
    { id: 7, value: 'Item 7' },
  ]

  onSubmit(): void {
    this.formSubmitted = true;

    if (this.formGroup.valid) {
      console.log('Formulario válido:', this.formGroup.value);
      // lógica de envío
    } else {
      console.log(this.formGroup.value, 88)
      console.log('Formulario inválido');
    }
  }
}
