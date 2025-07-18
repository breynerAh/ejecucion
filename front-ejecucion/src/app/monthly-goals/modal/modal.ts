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

@Component({
  selector: 'app-modal',
  imports: [MatDialogContent, MatDialogActions, MatDialogClose, MatButtonModule, InputUI, ReactiveFormsModule, SelectUI],
  templateUrl: './modal.html',
  styleUrl: './modal.scss'
})
export class Modal {
  formBuilder = inject(FormBuilder);
  formSubmitted = false;

  formGroup = this.formBuilder.group({
    startDate: [null, Validators.required],
    endDate: [null, Validators.required],
    typeBrigade: [null, Validators.required],
    amount: [null, [Validators.required, Validators.pattern('^[0-9]+$')]],
    toppings: [[]]
  });

  optionsB = [
    { id: 1, value: 'Brigada 1' },
    { id: 2, value: 'Brigada 2' },
    { id: 3, value: 'Brigada 3' },
    { id: 4, value: 'Brigada 4' },
    { id: 5, value: 'Brigada 5' }
  ]

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
