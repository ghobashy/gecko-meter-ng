import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeterGaugeComponent } from './component/meter-gauge/meter-gauge.component';
import { ButtonComponent } from './component/button/button.component';
import { CountUpModule } from 'countup.js-angular2';

@NgModule({
  imports: [
    CommonModule,
    CountUpModule
  ],
  exports: [
    MeterGaugeComponent,
    ButtonComponent,
    CountUpModule
  ],
  declarations: [MeterGaugeComponent, ButtonComponent]
})
export class SharedModule { }
