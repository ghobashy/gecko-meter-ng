import { APIS } from './../../config/api.config';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


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

  getNewMeasues() {
    return this.httpClient.get(APIS.GET_MEASURES).pipe(
      // catchError(this.handleError)
      map(response => {
        console.log('Response: ', response);
        return response;
      })
    );
  }



}
