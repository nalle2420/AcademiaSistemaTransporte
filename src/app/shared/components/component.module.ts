import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from './error/error.component';
import { OptionControlComponent } from './option-control/option-control.component';

@NgModule({
  declarations: [ ErrorComponent,
  OptionControlComponent],
  imports: [  ],
  exports: [ ErrorComponent, OptionControlComponent],
  providers: [],
})
export class ComponentModule {}
