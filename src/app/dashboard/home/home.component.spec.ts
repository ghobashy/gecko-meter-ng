import { ConfigService } from './../../shared/services/config.service';
import { IMeterConfig } from './../../shared/models/meter-config.interface';
import { Observable } from 'rxjs';
import { SharedModule } from './../../shared/shared.module';
import { MeterGaugeComponent } from './../../shared/component/meter-gauge/meter-gauge.component';
import { ButtonComponent } from './../../shared/component/button/button.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { CountUpModule } from 'countup.js-angular2';
import { IntervalMode, MeterMode } from '../../shared/models/meter-mode.enum';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  class MockConfigService {
    getNewMeasues(): Observable<IMeterConfig> {
      return null;
    }
    getNewMeasuresWithInterval(): Observable<any>{
      return null;
    }
  }
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CountUpModule
      ],
      declarations: [
        HomeComponent,
        ButtonComponent,
        MeterGaugeComponent
       ],
       providers: [
        {provide: ConfigService, useClass: MockConfigService}
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('[TEC] should create', () => {
    expect(component).toBeTruthy();
  });

  it('[ACC-005] As a User, I want to click on "Interval Mode" button to get to show Interval mode functionaility', () => {
    component.showInterval();
    expect(component.mode).toEqual(MeterMode.interval);
  });

  it('[ACC-008] As a User, I want to be able to close interval functionaility', () => {
    component.showInterval();
    component.closeInterval();
    expect(component.mode).toEqual(MeterMode.single);
  });
});
