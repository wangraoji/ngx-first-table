import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';

import { Grid } from '../../lib/grid';
import { DataSource } from '../../lib/data-source/data-source';

@Component({
    selector: '[ngx-st-thead]',
    templateUrl: './thead.component.html',
})
export class NgxSmartTableTheadComponent implements OnChanges {

    @Input() grid: Grid;
    @Input() source: DataSource;
    @Input() isAllSelected: boolean;
    @Input() createConfirm: EventEmitter<any>;
    @Input() theadBgc: object;
    @Input() customizeColumn: boolean;

    @Output() sort = new EventEmitter<any>();
    @Output() selectAllRows = new EventEmitter<any>();
    @Output() columnFormatPar = new EventEmitter<any>();
    @Output() columnIsHidePar = new EventEmitter<any>();
    @Output() create = new EventEmitter<any>();
    @Output() filter = new EventEmitter<any>();

    isHideHeader: boolean;
    isHideSubHeader: boolean;

    ngOnChanges() {
        this.isHideHeader = this.grid.getSetting('hideHeader');
        this.isHideSubHeader = this.grid.getSetting('hideSubHeader');
    }
}
