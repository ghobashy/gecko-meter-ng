import { Component, Input, ViewChild, ElementRef, Renderer2, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-meter-gauge',
  templateUrl: './meter-gauge.component.html',
  styleUrls: ['./meter-gauge.component.scss']
})
export class MeterGaugeComponent implements OnChanges {


  @ViewChild('needle') needleRef: ElementRef;

  @Input()
  private maxValue: number;
  @Input()
  private minValue: number;
  @Input()
  private value: number;

  public calcValue = -90;

  constructor(private renderer: Renderer2) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.reevaulateValues();
  }

  private reevaulateValues() {
    const percentage = (this.value * 100) / (this.maxValue - this.minValue);
    this.calcValue = (1.8 * percentage) - 90;
    this.updateGaugeAnimation(this.calcValue);
  }



  private updateGaugeAnimation(percentage: number) {
    this.renderer.setStyle(this.needleRef.nativeElement, 'transform', `rotate(${percentage}deg)`);
  }

}
