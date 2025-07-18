import { Component, inject } from '@angular/core';
import {
  MatDialog
} from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { TableUI } from "../components/table-ui/table-ui";
import { Modal } from './modal/modal';
import { SelectUI } from "../components/select-ui/select-ui";
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-monthly-goals',
  imports: [
    RouterModule,
    MatTableModule,
    MatIconModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    TableUI,
    SelectUI
  ],
  templateUrl: './monthly-goals.html',
  styleUrl: './monthly-goals.scss'
})
export class MonthlyGoals {
  tableColumns = [
    { key: 'day', label: 'Tipo de día' },
    { key: 'brigade', label: 'Tipo de brigada' },
    { key: 'value', label: 'Valor' }
  ];
  tableData = ELEMENT_DATA;

  readonly dialog = inject(MatDialog);
  openDialog() {
    this.dialog.open(Modal, { autoFocus: false });
  }

  contractSelection = [
    { id: 1, value: 'Contrato 1' },
    { id: 2, value: 'Contrato 2' },
    { id: 3, value: 'Contrato 3' },
  ]

  formBuilder = inject(FormBuilder);
  formSubmitted = false;

  formGroup = this.formBuilder.group({
    contractSelection: [null]
  });

}

const ELEMENT_DATA = [
  {
    day: "Dia de semana",
    brigade: "Brigade A",
    value: "70"
  },
  {
    day: "Festivo",
    brigade: "Brigade A",
    value: "90"
  },
  {
    day: "Dia de semana",
    brigade: "Brigade A",
    value: "70"
  },
  {
    day: "Dia de semana",
    brigade: "Brigade A",
    value: "70"
  },
  {
    day: "Dia de semana",
    brigade: "Brigade A",
    value: "70"
  },
  {
    day: "Festivo",
    brigade: "Brigade A",
    value: "90"
  }
]
