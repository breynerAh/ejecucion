import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableUI } from './table-ui';

describe('TableUI', () => {
  let component: TableUI;
  let fixture: ComponentFixture<TableUI>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableUI]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableUI);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
