import { Component, Input } from '@angular/core';

import { Grid } from '../../../lib/grid';
import { DataSource } from '../../../lib/data-source/data-source';

@Component({
  selector: '[ngx-st-checkbox-select-all]',
  template: `
    <input type="checkbox" [ngModel]="isAllSelected" class='checkBox'>
  `,
  styles: [`
    .checkBox{
       position: relative;
       top: 3px;
    }
  `],
})
export class CheckboxSelectAllComponent {

  @Input() grid: Grid;
  @Input() source: DataSource;
  @Input() isAllSelected: boolean;
}
