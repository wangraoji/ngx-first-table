import {Component, Input, Output, EventEmitter, OnChanges} from '@angular/core';

import { Grid } from '../../../lib/grid';
import { DataSource } from '../../../lib/data-source/data-source';
import { Column } from "../../../lib/data-set/column";

@Component({
  selector: '[ngx-st-thead-titles-row]',
  template: `
    <th ngx-st-checkbox-select-all *ngIf="isMultiSelectVisible"
                                   [grid]="grid"
                                   [source]="source"
                                   [isAllSelected]="isAllSelected"
                                   (click)="selectAllRows.emit($event)">
    </th>
    <th ngx-st-actions-title *ngIf="showActionColumnLeft" [grid]="grid"></th>
    <th *ngFor="let column of grid.getColumns()" class="ngx-first-th {{ column.id }}" [ngClass]="column.class"
      [style.width]="column.width" >
      <ngx-st-column-title [source]="source" [column]="column" (sort)="sort.emit($event)"></ngx-st-column-title>
    </th>
    <th ngx-st-actions-title *ngIf="showActionColumnRight" [grid]="grid"></th>
  `,
})
export class TheadTitlesRowComponent implements OnChanges {

  @Input() grid: Grid;
  @Input() isAllSelected: boolean;
  @Input() source: DataSource;

  @Output() sort = new EventEmitter<any>();
  @Output() selectAllRows = new EventEmitter<any>();

  isMultiSelectVisible: boolean;
  showActionColumnLeft: boolean;
  showActionColumnRight: boolean;


  ngOnChanges() {
    this.isMultiSelectVisible = this.grid.isMultiSelectVisible();
    this.showActionColumnLeft = this.grid.showActionColumn('left');
    this.showActionColumnRight = this.grid.showActionColumn('right');
  }

}
