import { ConfigService } from './../../shared/services/config.service';
import { IMeterConfig } from './../../shared/models/meter-config.interface';
import { Observable } from 'rxjs';
import { SharedModule } from './../../shared/shared.module';
import { MeterGaugeComponent } from './../../shared/component/meter-gauge/meter-gauge.component';
import { ButtonComponent } from './../../shared/component/button/button.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { CountUpModule } from 'countup.js-angular2';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  class MockConfigService {
    getNewMeasues(): Observable<IMeterConfig> {
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

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
