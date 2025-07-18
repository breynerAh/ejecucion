import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { TableUI } from "../components/table-ui/table-ui";
import { MatDialog } from '@angular/material/dialog';
import { Modal } from './modal/modal';

@Component({
  selector: 'app-payment-items',
  imports: [
    RouterModule,
    MatTableModule,
    MatIconModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    TableUI,
  ],
  templateUrl: './payment-items.html',
  styleUrl: './payment-items.scss'
})
export class PaymentItems {
  tableColumns = [
    { key: 'code', label: 'Código item de pago' },
    { key: 'description', label: 'Descripción' },
    { key: 'value', label: 'Valor unitario' },
    { key: 'locality', label: 'Tipo de localidad' },
    { key: 'date', label: 'Activación por rango de fecha' }
  ];
  tableData = ELEMENT_DATA;

  readonly dialog = inject(MatDialog);
  openDialog() {
    this.dialog.open(Modal, { autoFocus: false });
  }
}

const ELEMENT_DATA = [
  {
    code: "001",
    description: "Item 1",
    value: "100.000",
    locality: "Rural",
    date: "12/02/2025"
  },
  {
    code: "002",
    description: "Item 2",
    value: "100.000",
    locality: "Rural",
    date: "12/02/2025"
  },
  {
    code: "003",
    description: "Item 3",
    value: "100.000",
    locality: "Urbano",
    date: "12/02/2025"
  },
  {
    code: "004",
    description: "Item 4",
    value: "100.000",
    locality: "Urbano",
    date: "12/02/2025"
  },
  {
    code: "005",
    description: "Item 5",
    value: "100.000",
    locality: "Rural",
    date: "12/02/2025"
  },
  {
    code: "006",
    description: "Item 6",
    value: "100.000",
    locality: "Rural",
    date: "12/02/2025"
  },
  {
    code: "007",
    description: "Item 7",
    value: "100.000",
    locality: "Rural",
    date: "12/02/2025"
  },
  {
    code: "008",
    description: "Item 8",
    value: "100.000",
    locality: "Rural",
    date: "12/02/2025"
  },
]
