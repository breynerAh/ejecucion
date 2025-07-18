import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-table-ui',
  standalone: true,
  imports: [
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule,
    MatTooltipModule
  ],
  templateUrl: './table-ui.html',
  styleUrl: './table-ui.scss'
})
export class TableUI implements AfterViewInit {

  @Input() data: any[] = [];
  @Input() displayedColumns: { key: string; label: string }[] = [];
  @Input() showActions = false;
  @Input() onEdit: (row: any) => void = () => { };
  @Input() onDelete: (row: any) => void = () => { };
  dataSource = new MatTableDataSource<any>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  getDisplayedColumns(): string[] {
    return this.showActions
      ? [...this.displayedColumns.map(col => col.key), 'actions']
      : this.displayedColumns.map(col => col.key);
  }

  ngOnChanges() {
    if (this.data) {
      this.dataSource.data = this.data;
      // Reinicia el paginador y el sort si ya están disponibles
      if (this.paginator) {
        this.dataSource.paginator = this.paginator;
        // Si la página actual es mayor que el número de páginas disponibles, ve a la primera página
        /*  if (this.paginator.pageIndex * this.paginator.pageSize >= this.dataSource.data.length) {
           this.paginator.firstPage();
         } */
      }
      if (this.sort) {
        this.dataSource.sort = this.sort;
      }
    }
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator
    this.dataSource.sort = this.sort
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    /*   if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      } */
  }

  trackByFn(index: number, item: any): any {
    return item?.id || index;
  }
}
