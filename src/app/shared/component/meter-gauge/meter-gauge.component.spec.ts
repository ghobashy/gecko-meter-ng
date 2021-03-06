import { CountUpModule } from 'countup.js-angular2';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeterGaugeComponent } from './meter-gauge.component';

describe('MeterGaugeComponent', () => {
  let component: MeterGaugeComponent;
  let fixture: ComponentFixture<MeterGaugeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CountUpModule
      ],
      declarations: [ MeterGaugeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeterGaugeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
