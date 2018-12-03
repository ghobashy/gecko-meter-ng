import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeterGaugeComponent } from './component/meter-gauge/meter-gauge.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    MeterGaugeComponent
  ],
  declarations: [MeterGaugeComponent]
})
export class SharedModule { }
