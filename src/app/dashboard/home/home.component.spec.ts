import { ConfigService } from './../../shared/services/config.service';
import { IMeterConfig, MeterFormat } from './../../shared/models/meter-config.interface';
import { Observable, of, throwError } from 'rxjs';
import { SharedModule } from './../../shared/shared.module';
import { MeterGaugeComponent } from './../../shared/component/meter-gauge/meter-gauge.component';
import { ButtonComponent } from './../../shared/component/button/button.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { CountUpModule } from 'countup.js-angular2';
import { IntervalMode, MeterMode } from '../../shared/models/meter-mode.enum';
import { ERRORS } from '../../config/error.config';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  const defaultConfig: IMeterConfig = {
    min: 0,
    max: 100,
    value: 50,
    format: MeterFormat.currency,
    unit: 'EUR'
  };

  class MockConfigService {
    getNewMeasues(): Observable<IMeterConfig> {
      return of(defaultConfig);
    }
    getNewMeasuresWithInterval(): Observable<any> {
      return of(defaultConfig);
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
        { provide: ConfigService, useClass: MockConfigService }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('[ACC-001] As a User, I want to land on home screen with start button', () => {
    expect(component).toBeTruthy();
  });

  it(`[ACC-002] As a User, I want to click on "Start" button to start Gecko-Meter,
  [ACC-003] As a User, I want to have 2 modes for displaying meter results`, () => {
      component.startMeter();
      expect(component.start).toEqual(true);
    });

  it('[ACC-004] As a User, I want to click on "Single Mode" button to get one result on Gecko-Meter', () => {
    component.getMeasures();
    expect(component.minValue).toBe(0);
    expect(component.maxValue).toBe(100);
    expect(component.value).toBe(50);
  });


  it(`[ACC-011] As a User, I want to display an error message with red notification,
  showing the user what went wrong in case of errors`, () => {
      spyOn(component.configService, 'getNewMeasues').and.returnValue(
        Observable.create(observer => {
          observer.error(new Error(ERRORS.HOME.METER_INVALID));
          observer.complete();
        }));
      component.getMeasures();
      expect(component.errorMessage).toBe(ERRORS.HOME.METER_INVALID);
    });

  it(`[ACC-011] As a User, I want to display an error message with red notification,
  showing the user what went wrong in case of errors`, () => {
      spyOn(component.configService, 'getNewMeasues').and.returnValue(
        Observable.create(observer => {
          observer.error(ERRORS.HOME.SERVER_UNAVAILABLE);
          observer.complete();
        }));
      component.getMeasures();
      expect(component.errorMessage).toBe(ERRORS.HOME.SERVER_UNAVAILABLE);
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

  it('[ACC-010] As a User, I want to click on Interval Mode stop button to stop updating results on Gecko-Meter', () => {
    component.intervalState = IntervalMode.end;
    component.startInterval();
    expect(component.intervalState).toBe(IntervalMode.start);
    expect(component.intervalButtonText).toBe('START');
    expect(component.errorMessage).toBe('');
  });

  it('[TEC-ACC04] As a developer, I want to unsubscrive from interval observable in case the interval stop button is clicked', () => {
    component.intervalState = IntervalMode.end;
    component.intervalOb = component.configService.getNewMeasuresWithInterval(1).subscribe();
    console.log(component.intervalOb);
    component.startInterval();
    expect(component.intervalState).toBe(IntervalMode.start);
    expect(component.intervalButtonText).toBe('START');
    expect(component.errorMessage).toBe('');
    // check if observable is closed of not
    expect(component.intervalOb.closed).toBe(true);
  });

  it('[ACC-009] As a User, I want to click on Interval Mode start button to get updated results on Gecko-Meter', () => {
    component.intervalState = IntervalMode.start;
    component.startInterval();
    expect(component.intervalState).toBe(IntervalMode.end);
    expect(component.intervalButtonText).toBe('STOP');
    expect(component.errorMessage).toBe('');
  });

  it('[ACC-009] As a User, I want to click on Interval Mode start button to get updated results on Gecko-Meter', () => {
    component.intervalState = IntervalMode.start;
    spyOn(component.configService, 'getNewMeasuresWithInterval').and.returnValue(
      Observable.create(observer => {
        observer.error(ERRORS.HOME.SERVER_UNAVAILABLE);
        observer.complete();
      }));
    component.startInterval();
    expect(component.intervalState).toBe(IntervalMode.start);
    expect(component.intervalButtonText).toBe('START');
    expect(component.errorMessage).toBe(ERRORS.HOME.SERVER_UNAVAILABLE);
  });

  it('[ACC-009] As a User, I want to click on Interval Mode start button to get updated results on Gecko-Meter', () => {
    component.intervalState = IntervalMode.start;
    spyOn(component.configService, 'getNewMeasuresWithInterval').and.returnValue(
      Observable.create(observer => {
        observer.error({ message: ERRORS.HOME.SERVER_UNAVAILABLE } );
        observer.complete();
      }));
    component.startInterval();
    expect(component.intervalState).toBe(IntervalMode.start);
    expect(component.intervalButtonText).toBe('START');
    expect(component.errorMessage).toBe(ERRORS.HOME.SERVER_UNAVAILABLE);
  });


});
