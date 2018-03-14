import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Column } from '../../../lib/data-set/column';
import { DataSource } from '../../../lib/data-source/data-source';

@Component({
  selector: 'ngx-st-column-title',
  template: `
    <div class="ngx-first-title">
      <ngx-first-table-title [source]="source" [column]="column" (sort)="sort.emit($event)"></ngx-first-table-title>
    </div>
  `,
})
export class ColumnTitleComponent {

  @Input() column: Column;
  @Input() source: DataSource;

  @Output() sort = new EventEmitter<any>();

}
