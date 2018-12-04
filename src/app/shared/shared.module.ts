import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeterGaugeComponent } from './component/meter-gauge/meter-gauge.component';
import { ButtonComponent } from './component/button/button.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    MeterGaugeComponent,
    ButtonComponent
  ],
  declarations: [MeterGaugeComponent, ButtonComponent]
})
export class SharedModule { }
