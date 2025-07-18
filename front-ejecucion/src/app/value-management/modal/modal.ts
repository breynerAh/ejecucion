import { Component, Inject, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent
} from '@angular/material/dialog';
import { InputUI } from '../../components/input-ui/input-ui';
import { SelectUI } from "../../components/select-ui/select-ui";

@Component({
  selector: 'app-modal',
  imports: [MatDialogContent, MatDialogActions, MatDialogClose, MatButtonModule, InputUI, ReactiveFormsModule, SelectUI],
  templateUrl: './modal.html',
  styleUrl: './modal.scss'
})
export class Modal {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    console.log('Datos recibidos en el modal:', data);
  }

  formBuilder = inject(FormBuilder);
  formSubmitted = false;

  formGroup = this.formBuilder.group({
    code: ['', Validators.required],
    typeBrigade: ['', Validators.required],
    typeDay: [null, Validators.required],
    value: [null, [Validators.required, Validators.pattern('^[0-9]+$')]],
  });

  optionsD = [
    { id: 1, value: 'Dia de semana' },
    { id: 2, value: 'Domingo' },
    { id: 3, value: 'Festivo' },
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
