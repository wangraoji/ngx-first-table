import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CellModule } from '../cell/cell.module';

import { NgxFirstTableCaptionComponent } from './caption.component';

const Caption_COMPONENTS = [
  NgxFirstTableCaptionComponent,
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CellModule,
  ],
  declarations: [
    ...Caption_COMPONENTS,
  ],
  exports: [
    ...Caption_COMPONENTS,
  ],
})
export class CaptionModule { }
