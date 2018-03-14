import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';

import { Grid } from '../../../lib/grid';
import { Row } from '../../../lib/data-set/row';

@Component({
  selector: '[ngx-st-thead-form-row]',
  template: `
      <td *ngIf=""></td>
      <td  *ngIf="showActionColumnLeft"  class="ngx-first-actions">
        <ngx-st-actions [grid]="grid" (create)="onCreate($event)"></ngx-st-actions>
      </td>
      <td *ngFor="let cell of grid.getNewRow().getCells()">
        <ngx-first-table-cell [cell]="cell"
                              [grid]="grid"
                              [isNew]="true"
                              [createConfirm]="createConfirm"
                              [inputClass]="addInputClass"
                              [isInEditing]="grid.getNewRow().isInEditing"
                              (edited)="onCreate($event)">
        </ngx-first-table-cell>
      </td>
      <td  *ngIf="showActionColumnRight"  class="ngx-first-actions">
        <ngx-st-actions [grid]="grid" (create)="onCreate($event)"></ngx-st-actions>
      </td>
  `,
})
export class TheadFormRowComponent implements OnChanges {

  @Input() grid: Grid;
  @Input() row: Row;
  @Input() createConfirm: EventEmitter<any>;

  @Output() create = new EventEmitter<any>();

  isMultiSelectVisible: boolean;
  showActionColumnLeft: boolean;
  showActionColumnRight: boolean;
  addInputClass: string;

  onCreate(event: any) {
    event.stopPropagation();

    this.grid.create(this.grid.getNewRow(), this.createConfirm);
  }

  ngOnChanges(){
    this.isMultiSelectVisible = this.grid.isMultiSelectVisible();
    this.showActionColumnLeft = this.grid.showActionColumn('left');
    this.showActionColumnRight = this.grid.showActionColumn('right');
    this.addInputClass = this.grid.getSetting('add.inputClass');
  }
}
