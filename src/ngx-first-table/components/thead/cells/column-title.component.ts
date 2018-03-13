import { Component, Input, Output, EventEmitter,OnInit } from '@angular/core';

import { Column } from '../../../lib/data-set/column';
import { DataSource } from '../../../lib/data-source/data-source';

@Component({
  selector: 'ngx-st-column-title',
  template: `
    <div class="ngx-smart-title">
      <ngx-first-table-title [source]="source" [column]="column" (sort)="sort.emit($event)" [customizeColumn]="customizeColumn" [grid]="grid"></ngx-first-table-title>
    </div>
  `,
})
export class ColumnTitleComponent {

  @Input() column: Column;
  @Input() source: DataSource;
  @Input() customizeColumn: boolean;
  @Input() grid: any;
  @Output() sort = new EventEmitter<any>();
  
  ngOnInit(){
    // console.info(this.column);
  }
}
