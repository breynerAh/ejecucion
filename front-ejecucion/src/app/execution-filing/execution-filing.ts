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

@Component({
  selector: 'app-execution-filing',
  imports: [
    RouterModule,
    MatTableModule,
    MatIconModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    TableUI
  ],
  templateUrl: './execution-filing.html',
  styleUrl: './execution-filing.scss'
})
export class ExecutionFiling {
  tableColumns = [
    { key: 'date', label: 'Fecha' },
    { key: 'brigade', label: 'Tipo de brigada' },
    { key: 'resource', label: 'Tipo de recurso' },
    { key: 'item', label: 'Item de pago' }
  ];
  tableData = ELEMENT_DATA;

  readonly dialog = inject(MatDialog);
  openDialog() {
    this.dialog.open(Modal, { autoFocus: false });
  }
}

const ELEMENT_DATA = [
  {
    date: "11/03/2016",
    brigade: "Brigada 1",
    resource: "Recurso 1",
    item: "Item de pago"
  },
  {
    date: "11/03/2016",
    brigade: "Brigada 1",
    resource: "Recurso 1",
    item: "Item de pago"
  },
  {
    date: "11/03/2016",
    brigade: "Brigada 1",
    resource: "Recurso 1",
    item: "Item de pago"
  },
  {
    date: "11/03/2016",
    brigade: "Brigada 1",
    resource: "Recurso 1",
    item: "Item de pago"
  },
  {
    date: "11/03/2016",
    brigade: "Brigada 1",
    resource: "Recurso 1",
    item: "Item de pago"
  },
  {
    date: "11/03/2016",
    brigade: "Brigada 1",
    resource: "Recurso 1",
    item: "Item de pago"
  },
  {
    date: "11/03/2016",
    brigade: "Brigada 1",
    resource: "Recurso 1",
    item: "Item de pago"
  },
  {
    date: "11/03/2016",
    brigade: "Brigada 1",
    resource: "Recurso 1",
    item: "Item de pago"
  },
]
