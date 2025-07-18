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
    description: [null, Validators.required],
    value: [null, [Validators.required, Validators.pattern('^[0-9]+$')]],
    locality: [null, Validators.required],
    date: [null, Validators.required],
  });

  options = [
    { id: 1, value: 'Item desc. 1' },
    { id: 2, value: 'Item desc. 2' },
    { id: 3, value: 'Item desc. 3' },
    { id: 4, value: 'Item desc. 4' },
    { id: 5, value: 'Item desc. 5' }
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
