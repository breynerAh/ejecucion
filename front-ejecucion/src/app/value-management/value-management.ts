import { Component, Inject, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import {
  MatDialog,
  MatDialogModule
} from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { SelectUI } from '../components/select-ui/select-ui';
import { TableUI } from "../components/table-ui/table-ui";
import { OvertimeService } from '../services/overtime.service';
import { Modal } from './modal/modal';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-value-management',
  imports: [
    RouterModule,
    MatTableModule,
    MatIconModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    TableUI,
    MatDialogModule,
    SelectUI,
    ReactiveFormsModule
  ],
  templateUrl: './value-management.html',
  styleUrl: './value-management.scss'
})
export class ValueManagement implements OnInit {
  dataBusiness: { id: number; value: string }[] = [];
  dataOperations: { id: number; value: string }[] = [];
  dataContracts: { id: number; value: string }[] = [];
  emprId: number | null = null
  operId: number | null = null

  constructor(private overtimeService: OvertimeService, @Inject(PLATFORM_ID) private platformId: Object) { }

  formBuilder = inject(FormBuilder);
  formGroup = this.formBuilder.group({
    business: [{ value: null, disabled: false }],
    operations: [{ value: null, disabled: true }],
    contracts: [{ value: null, disabled: true }],
  });

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.getBusiness();

      this.formGroup.get('business')?.valueChanges.subscribe((value) => {
        this.emprId = value;
        // Limpiar operaciones y contratos
        this.dataOperations = [];
        this.dataContracts = [];
        this.formGroup.patchValue({
          operations: null,
          contracts: null
        });
        // Habilitar o deshabilitar input
        if (value) {
          this.formGroup.get('operations')?.enable();
        } else {
          this.formGroup.get('operations')?.disable();
        }

        if (this.emprId) {
          this.getOperation();
        }
      })

      this.formGroup.get('operations')?.valueChanges.subscribe((value) => {
        this.operId = value;
        // Limpiar contratos
        this.dataContracts = [];
        this.formGroup.patchValue({
          contracts: null
        });
        // Habilitar o deshabilitar input
        if (value) {
          this.formGroup.get('contracts')?.enable();
        } else {
          this.formGroup.get('contracts')?.disable();
        }

        if (this.operId) {
          this.getContracts();
        }
      })
    } else {
      console.warn('ngOnInit: En el servidor. Saltando la carga de datos que requieren autenticación.');
    }
  }

  getBusiness() {
    this.overtimeService.getBusiness2().subscribe((data: any) => {
      this.dataBusiness = data?.map((item: any) => {
        return {
          id: item?.emprid,
          value: item?.emprnomb
        }
      });
    })
  }

  onChange() {
    const businessValue = this?.formGroup?.value?.business;
    const operationsValue = this?.formGroup?.value?.operations;

    this.emprId = businessValue === undefined ? null : businessValue;
    this.operId = operationsValue === undefined ? null : operationsValue;
  }

  getOperation() {
    this.overtimeService.getOperationxBusinessIdAdmin(this.emprId).subscribe((data: any) => {
      this.dataOperations = data?.operation?.map((item: any) => {
        return {
          id: item?.operid,
          value: item?.opernomb
        }
      });
    })
  }

  getContracts() {
    this.overtimeService.getContractsxOperationIdAdmin(this.operId).subscribe((data: any) => {
      this.dataContracts = data?.contracts?.map((item: any) => {
        return {
          id: item?.contrid,
          value: item?.contdesc
        }
      });
    })
  }

  tableColumns = [
    { key: 'code', label: 'Código' },
    { key: 'brigade', label: 'Tipo de brigada' },
    { key: 'day', label: 'Tipo de día' },
    { key: 'value', label: 'Valor' }
  ];
  tableData = ELEMENT_DATA;

  readonly dialog = inject(MatDialog);
  openDialog(row?: any) {
    this.dialog.open(Modal, { autoFocus: false, data: row });
  }

  onEdit = (row: any) => {
    console.log(row, "edit");
    this.openDialog(row)
  }

  onDelete = (row: any) => {
    console.log(row, "delete")
  }
}

const ELEMENT_DATA: any[] = [
  {
    code: "Code 1",
    brigade: "Brigade A",
    day: "Dia de semana",
    value: "700.000"
  },
  {
    code: "Code 2",
    brigade: "Brigade B",
    day: "Festivo",
    value: "900.000"
  },
  {
    code: "Code 3",
    brigade: "Brigade A",
    day: "Dia de semana",
    value: "700.000"
  },
  {
    code: "Code 4",
    brigade: "Brigade A",
    day: "Dia de semana",
    value: "700.000"
  },
  {
    code: "Code 5",
    brigade: "Brigade A",
    day: "Dia de semana",
    value: "700.000"
  },
  {
    code: "Code 6",
    brigade: "Brigade A",
    day: "Festivo",
    value: "900.000"
  },
  {
    code: "Code 7",
    brigade: "Brigade A",
    day: "Dia de semana",
    value: "700.000"
  },
  {
    code: "Code 8",
    brigade: "Brigade A",
    day: "Festivo",
    value: "900.000"
  },
  {
    code: "Code 9",
    brigade: "Brigade A",
    day: "Dia de semana",
    value: "700.000"
  },
  {
    code: "Code 10",
    brigade: "Brigade A",
    day: "Dia de semana",
    value: "700.000"
  },
  {
    code: "Code 11",
    brigade: "Brigade A",
    day: "Dia de semana",
    value: "700.000"
  },
  {
    code: "Code 12",
    brigade: "Brigade A",
    day: "Dia de semana",
    value: "700.000"
  },
  {
    code: "Code 13",
    brigade: "Brigade A",
    day: "Dia de semana",
    value: "700.000"
  },
  {
    code: "Code 14",
    brigade: "Brigade A",
    day: "Dia de semana",
    value: "700.000"
  },
  {
    code: "Code 15",
    brigade: "Brigade A",
    day: "Dia de semana",
    value: "700.000"
  },
  {
    code: "Code 16",
    brigade: "Brigade A",
    day: "Dia de semana",
    value: "700.000"
  },
  {
    code: "Code 17",
    brigade: "Brigade A",
    day: "Dia de semana",
    value: "700.000"
  }
]
