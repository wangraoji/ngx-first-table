import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';

import { Grid } from '../../../lib/grid';
import { DataSource } from '../../../lib/data-source/data-source';
import { Column } from "../../../lib/data-set/column";

@Component({
  selector: '[ngx-st-thead-filters-row]',
  template: `
    <th *ngIf="isClickIcon"></th>
    <th *ngIf="isMultiSelectVisible"></th>
    <th ngx-st-add-button *ngIf="showActionColumnLeft"
                          [grid]="grid"
                          (create)="create.emit($event)">
    </th>
    <th *ngIf="actions2IsShow && actions2Left"></th>
    <ng-container *ngFor="let column of grid.getColumns()">
      <th *ngIf="!column.settings.isHide" class="ngx-smart-th {{ column.id }}">
        <ngx-first-table-filter [source]="source"
                                [column]="column"
                                [grid]="grid"
                                [inputClass]="filterInputClass"
                                (filter)="filter.emit($event)">
        </ngx-first-table-filter>
      </th>
    </ng-container>
    <th ngx-st-add-button *ngIf="showActionColumnRight"
                          [grid]="grid"
                          [source]="source"
                          (create)="create.emit($event)">
    </th>
    <th *ngIf="actions2IsShow && actions2Right"></th>
  `,
})
export class TheadFitlersRowComponent implements OnChanges {

  @Input() grid: Grid;
  @Input() source: DataSource;

  @Output() create = new EventEmitter<any>();
  @Output() filter = new EventEmitter<any>();

  isMultiSelectVisible: boolean;
  showActionColumnLeft: boolean;
  showActionColumnRight: boolean;
  filterInputClass: string;
  isClickIcon: boolean;

  // 新增 Action2 列
  actions2IsShow: boolean;
  actions2Left: boolean;
  actions2Right: boolean;

  ngOnChanges() {
    this.isMultiSelectVisible = this.grid.isMultiSelectVisible();
    this.showActionColumnLeft = this.grid.showActionColumn('left');
    this.showActionColumnRight = this.grid.showActionColumn('right');
    this.filterInputClass = this.grid.getSetting('filter.inputClass');
    this.isClickIcon = this.grid.getSetting('isClickIcon');
    // 新增 actions2 列
    this.actions2IsShow = this.grid.getSetting('actions2').isShow;
    this.actions2Left = this.grid.getSetting('actions2').position === 'left';
    this.actions2Right = this.grid.getSetting('actions2').position === 'right';
  }
}
