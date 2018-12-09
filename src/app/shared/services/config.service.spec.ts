import { MeterFormat } from './../models/meter-config.interface';
import { HttpClientModule } from '@angular/common/http';
import { TestBed, inject } from '@angular/core/testing';

import { ConfigService } from './config.service';
import { IMeterConfig } from '../models/meter-config.interface';
import { of, defer } from 'rxjs';


let httpClientSpy: { get: jasmine.Spy };
let configService: ConfigService;
describe('ConfigService', () => {
  httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
  configService = new ConfigService(<any>httpClientSpy);

  it('should be created', () => {
    expect(configService).toBeTruthy();
  });


  // it('[ACC-004] As a User, I want to click on "Single Mode" button to get one result on Gecko-Meter', () => {
  //   const expectedData: IMeterConfig = {
  //     min: 0,
  //     max: 100,
  //     value: 50,
  //     format: MeterFormat.currency,
  //     unit: 'EUR'
  //   };
  //   httpClientSpy.get.and.returnValue(of(expectedData));
  //   configService.getNewMeasues().subscribe(
  //     response => {
  //       console.log('response', response);
  //       console.log('expectedData', expectedData);
  //       expect(response).toEqual(expectedData, 'expected data');
  //     },
  //     fail
  //   );
  //   expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  // });

});
