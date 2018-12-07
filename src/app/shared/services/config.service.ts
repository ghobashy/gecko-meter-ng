import { MeterFormat, IMeterConfig } from '../models/meter-config.interface';
import { APIS } from './../../config/api.config';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, of, interval } from 'rxjs';
import { map, catchError, flatMap } from 'rxjs/operators';
import { ERRORS } from '../../config/error.config';


@Injectable()
export class ConfigService {

  constructor(private httpClient: HttpClient) { }

  // ngOnInit(){
  //   this.alive = true;
  //   TimerObservable.create(0, 10000)
  //     .pipe(
  //       takeWhile(() => this.alive)
  //     )
  //     .subscribe(() => {
  //       this.myservice.checkdata().subscribe( result => { this.statustext = result } );
  //     });
  // }

  // ngOnDestroy(){
  //   this.alive = false;
  // }

  getNewMeasues(): Observable<IMeterConfig> {
    return this.httpClient.get(APIS.GET_MEASURES).pipe(
      catchError((error: any) => {
        return throwError(ERRORS.HOME.SERVER_UNAVAILABLE);
      }),
      map((response: IMeterConfig) => {
        console.log('Response: ', response);
        if (!response.min || !response.max || !response.value) {
          throw new Error(ERRORS.HOME.CONFIG_INCOMPLETE);
        }
        if (response.min > response.max) {
          throw new Error(ERRORS.HOME.METER_INVALID);
        } else if (response.value < response.min) {
          throw new Error(ERRORS.HOME.VALUE_LT_MIN);
        } else if (response.value > response.max) {
          throw new Error(ERRORS.HOME.VALUE_GT_MAX);
        }
        return response;
      })
    );
  }

  getNewMeasuresWithInterval(intervalSec: number): Observable<any> {
    return interval(intervalSec * 1000)
      .pipe(
        flatMap(() => this.getNewMeasues())
      );
  }

}
